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
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      console.log(response);
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
    <div className="text-white px-48 pt-16">
      <p className="text-center text-4xl font-bold">Log in to SecretSphere</p>

      <form onSubmit={handleSubmit} className="flex flex-col px-96 pt-10 gap-1">
        <label>Email</label>
        <input
          type="email"
          label="Email"
          className="px-2 py-2 rounded-sm text-black"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label className="pt-5">Password</label>
        <input
          type="password"
          className="px-2 py-2 rounded-sm text-black"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button
          type="submit"
          className="mt-10 py-3 rounded-3xl bg-blue-500 font-medium text-black"
        >
          Log In
        </button>

        <p className="text-center pt-5 underline">Forgot your password?</p>
      </form>
    </div>
  );
};

export default Login;
