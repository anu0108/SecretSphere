import React, { useEffect, useState } from "react";
import SecretCard from "./SecretCard";
import axios from "axios";

const Home = () => {
  const [secretMessages, setSecretMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/messages`
        );
        console.log(response.data);
        setSecretMessages(response.data);
        console.log("hi");
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, []);

  if (!Array.isArray(secretMessages)) {
    console.error("Messages is not an array:", secretMessages);
    return null; // or handle the error appropriately
  }

  return (
    <div className="px-44 pt-10 grid grid-cols-4 gap-x-3 gap-y-10">
      {secretMessages.map((msg) => (
        <SecretCard key={msg._id} secret={msg.message} />
      ))}
    </div>
  );
};

export default Home;
