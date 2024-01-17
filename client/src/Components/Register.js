import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isRevealPwd, setIsRevealPwd] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/register`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      // console.log(response);
      // const data = await response.json();

      if (response.data.status === "ok") {
        alert("Registration successful. Login to continue!");
        navigate("/login");
      } else {
        // toast.error("Registration Failed!");
        alert(response.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="text-white px-auto pt-16">
      <div className="flex-col">{/* <p>Ready to Whisper?</p> */}</div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-60 sm:w-80 justify-center px-auto mx-auto pt-10 gap-2"
      >
        <div className="w-68 sm:w-96">
          <p className="text-2xl md:text-4xl font-bold w-full">
            Sign up to start secreting
          </p>
        </div>

        <label className="">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          className="px-2 py-2 w-60 sm:w-80 mx-auto rounded-sm text-black"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label className="">Password</label>
        <input
          type="password"
          name="pwd"
          value={password}
          className="px-2 py-2 w-60 sm:w-80 mx-auto rounded-sm text-black"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button
          type="submit"
          className="mt-10 mx-auto w-60 sm:w-80 py-3 rounded-3xl bg-blue-500 hover:bg-blue-600 font-medium text-black"
        >
          Register
        </button>
      </form>
      <div className="mx-auto px-16 sm:px-48 md:px-64 lg:px-96 xl:px-[450px] pt-14 text-gray-500">
        <hr className="" />
        <div className="text-sm sm:text-base flex justify-center pt-2 gap-2">
          <p className="">Already have an account?</p>
          <Link
            to="/login"
            className="text-sm sm:text-base text-white underline"
          >
            Log in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
