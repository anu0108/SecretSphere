import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const HandleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <nav className="flex justify-between text-white py-6 px-8 md:px-8 lg:px-36">
      <div className="flex items-center gap-28">
        <div className="flex items-center gap-3">
          <FaUserSecret className="text-4xl" />
          <Link to="/">
            <p className="text-xl md:text-3xl font-bold">SecretSphere</p>
          </Link>
        </div>
      </div>

      <div className="sm:flex gap-7 pt-2 text-sm md:text-base hidden">
        <Link to="/">
          <p className="">Home</p>
        </Link>
        <Link to="/about">
          <p className="">About</p>
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

      {!isClicked && (
        <IoReorderThreeOutline
          className="sm:hidden mt-2 text-2xl font-bold cursor-pointer"
          onClick={HandleClick}
        />
      )}

      {isClicked && (
        <RxCross1
          className="sm:hidden mt-2 text-base font-bold cursor-pointer"
          onClick={HandleClick}
        />
      )}

      <div className="absolute w-11/12 mr-5 px-10 rounded items-center top-16 right-[1px] bg-[#011a28]">
        {isClicked && (
          <div className="flex flex-col justify-center items-center">
            <Link to="/">
              <p className="">Home</p>
            </Link>
            <Link to="/about">
              <p className="">About</p>
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
        )}
      </div>
    </nav>
  );
};

export default Header;
