import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Footer = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const response = await axios.post("http://localhost:3001/logout", {
        withCredentials: true,
      });
      if (response.status === 200) {
        // Successfully logged out
        navigate("/login");
        alert("User logged out successfully!");
      } else {
        console.log("bad response");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="text-white border-t-2 fixed bottom-0 left-0 w-full  p-3">
      <div className="mx-auto w-5/6 flex justify-between">
        <div className="">
          <p>Developed by Anurag Wadhwa</p>
        </div>
        <Link onClick={logout}>
          <p>Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
