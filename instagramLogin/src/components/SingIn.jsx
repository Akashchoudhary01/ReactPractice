import React from 'react'
import main from "../assets/main.png";
import { FaFacebook } from "react-icons/fa6";

export default function SingIn({onSwitch}) {
   return (
    //  {/* left image section*/}
    <div className=" h-screen bg-black flex justify-col ">
      <div>
        <img
          className="flex ml-64 mt-24 w-md justify-end flex-grid-2"
          src={main}
          alt=""
        />
      </div>
     {/* Right input section */}
      <div className=" w-1/4 outline-1 flex-wrap items-center justify-end text-gray-100 outline-gray-800 m-8">
        <h1 className="text-center text-3xl m-5">Instagram</h1>
        <p className="text-center text-sm m-2  text-gray-400">
          Sign up to see photos and videos from your friends and family.
        </p>
        <p className="text-white px-4 flex py-1 mt-3 bg-blue-500  m-2 rounded-lg text-center items-center justify-center outline-1 outline-black">
          <FaFacebook className="mt-1 mr-3" /> log in with facebook
        </p>

        <div className="flex items-center justify-center m-4 text-zinc-300">
          <hr className="flex-grow border-zinc-600" />
          <span className="px-3 text-md">or</span>
          <hr className="flex-grow border-zinc-600" />
        </div>

        {/* //input field */}
        <div className="flex flex-wrap gap-1 text-center justify-center">
          <input
            type="email || number"
            placeholder="Mobile number or email"
            className=" px-12 rounded-lg py-1.5 outline-1 outline-gray-600 "
            name=""
            id=""
          />
          
          <input
            type="password"
            placeholder="password"
            className=" px-12 rounded-lg py-1.5 outline-1 outline-gray-600 "
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Fullname"
            className=" px-12 rounded-lg py-1.5 outline-1 outline-gray-600 "
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Username"
            className=" px-12 rounded-lg py-1.5 outline-1 outline-gray-600 "
            name=""
            id=""
          />
        <p className="text-[10px] flex justify-center items-center text-gray-400 mt-2">People who use our service may have uploaded your contact information to Instagram. Learn More</p>

        <button onClick={onSwitch} className='text-white mb-2 px-16 hover:animate-pulse flex py-1 bg-blue-500  m-2 rounded-lg text-center items-center justify-center outline-1 outline-black'>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
