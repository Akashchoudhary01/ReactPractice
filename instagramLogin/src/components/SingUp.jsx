import React from "react";
import main from "../assets/main.png";
import { FaFacebook } from "react-icons/fa6";

export default function SignUp({onSwitch}) {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      {/* Wrapper for image + form */}
      <div className="flex items-center gap-16">
        {/* Left image */}
        <div className="flex items-center justify-center">
          <img
            src={main}
            alt="Main illustration"
            className="w-[400px] object-contain"
          />
        </div>

        {/* Right form */}
        <div className="w-[320px] bg-black text-gray-100 flex flex-col items-center">
          <h1 className="text-3xl font-semibold mb-6 text-center">Instagram</h1>

          {/* Input fields */}
          <input
            type="email"
            placeholder="Mobile number or email"
            className="w-full px-4 py-2 mb-3 rounded-lg bg-black border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 rounded-lg bg-black border border-gray-600 focus:outline-none focus:border-blue-500"
          />

          {/* Sign Up button */}
          <button onClick={onSwitch} className="w-full py-2 mb-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-all">
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center w-full my-4 text-zinc-400">
            <hr className="flex-grow border-zinc-600" />
            <span className="px-3 text-sm">or</span>
            <hr className="flex-grow border-zinc-600" />
          </div>

          {/* Facebook login */}
          <button className="w-full flex items-center justify-center py-2 mb-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-all">
            <FaFacebook className="mr-2 text-lg" />
            Log in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
