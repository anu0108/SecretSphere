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
    <div className="text-white px-48 pt-16">
      <div className="flex-col">
        <p className="text-center text-4xl font-bold">
          Sign up to start secreting
        </p>
        {/* <p>Ready to Whisper?</p> */}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col px-96 pt-10 gap-1">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          className="px-2 py-2 rounded-sm text-black"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label className="pt-5">Password</label>
        <input
          type="password"
          name="pwd"
          value={password}
          className="px-2 py-2 rounded-sm text-black"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button
          type="submit"
          className="mt-10 py-3 rounded-3xl bg-blue-500 hover:bg-blue-600 font-medium text-black"
        >
          Register
        </button>
      </form>
      <div className="px-96 pt-14 text-gray-500">
        <hr className="" />
        <div className="flex justify-center pt-2 gap-2">
          <p className="">Already have an account?</p>
          <Link to="/login" className="text-white underline">
            Log in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
