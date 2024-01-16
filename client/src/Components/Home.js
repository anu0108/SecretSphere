import React, { useEffect, useState } from "react";
import SecretCard from "./SecretCard";
import axios from "axios";

const Home = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:3001/messages");
        setMessages(response.data);
        console.log("hi");
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="px-44 pt-10 grid grid-cols-4 gap-x-3 gap-y-10">
      {messages.map((msg) => (
        // <p className="text-white" key={msg._id}>
        //   {msg.message}
        // </p>
        <SecretCard key={msg._id} secret={msg.message} />
      ))}
    </div>
  );
};

export default Home;
