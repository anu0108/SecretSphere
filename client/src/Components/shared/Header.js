import React from "react";
import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa6";

const Header = () => {

  return (
    <nav className="flex justify-between text-white py-6 px-36">
      <div className="flex items-center gap-28">
        <div className="flex items-center gap-3">
          <FaUserSecret className="text-4xl" />
          <Link to="/">
            <p className="text-3xl font-bold">SecretSphere</p>
          </Link>
        </div>
      </div>

      <div className="flex gap-10 pt-2">
        <Link to="/">
          <p className="">Home</p>
        </Link>
        <Link to="/secret">
          <p className="">Secret</p>
        </Link>
        <Link to="/register">
          <p>Sign Up</p>
        </Link>
        <Link to="/login">
          <p>Login</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
