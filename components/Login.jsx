"use client";

import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Envio");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1FC4AC] to-[#F78F72]">
      <div className="w-[351px] p-6 bg-white border-4 rounded-lg text-black text-center border-white">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 text-center"
        >
          <h1 className="text-center text-black text-4xl font-semibold">
            Contact
          </h1>
          <hr className="text-gray-200" />
          <div>
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              className="m-2.5 border-0 border-b text-gray-400 w-full"
            />
          </div>
          <div className="email">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="m-2.5 border-0 border-b text-gray-400 w-full"
            />
          </div>
          <div className="message">
            <input
              type="text"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              className="m-2.5 border-0 border-b text-gray-400 w-full"
            />
          </div>
          <div className="text-left">
            <button
              type="reset"
              className="self-start ml-4 bg-gray-200 border-gray-200 text-gray-500 p-0.5 rounded-md cursor-pointer"
            >
              Reset
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="w-44 h-8 m-2.5 border-0 bg-blue-400 rounded-md text-white cursor-pointer"
            >
              Submit
            </button>
          </div>
          <div>
            <p className="text-blue-300 cursor-pointer">Back to Home page</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
