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
    <div className=" place-items-center sm:px-20 md:px-6 lg:px-36 pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-4 lg:gap-y-6 xl:gap-y-10 pb-16">
      {secretMessages.map((msg) => (
        <SecretCard key={msg._id} secret={msg.message} time={msg.timestamp} />
      ))}
    </div>
  );
};

export default Home;
