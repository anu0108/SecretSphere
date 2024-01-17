import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
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
        alert("Login successful!");
        navigate("/");
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-60 sm:w-80 justify-center px-auto mx-auto pt-8 gap-1"
      >
        <p className="text-center text-2xl md:text-4xl w-full font-bold mb-6">
          Log in to SecretSphere
        </p>
        <label>Email</label>
        <input
          type="email"
          label="Email"
          className="px-2 py-2 w-60 sm:w-80 mx-auto rounded-sm text-black"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label className="">Password</label>
        <input
          type="password"
          className="px-2 py-2 w-60 sm:w-80 mx-auto rounded-sm text-black"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button
          type="submit"
          className="mt-10 py-3 rounded-3xl bg-blue-500 hover:bg-blue-600 font-medium text-black"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
