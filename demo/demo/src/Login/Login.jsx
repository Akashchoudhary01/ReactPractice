import React, {  useState } from "react";

export default function Login() {
   const [userName , setUsername] = useState('');
   const [password , setPassWord] = useState('');

    const HandelFormSubmit = (e)=>{
        e.preventDefault();
        const Logindata = {
            userName,
            password,
        }
        console.log(Logindata);
        
    }
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center 
                    bg-gradient-to-r from-red-500 via-purple-600 to-black 
                    transition-all duration-300 ease-in-out p-4"
    >
      {/* Responsive card */}
      <div
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 
                      bg-white/10 backdrop-blur-3xl shadow-xl 
                      rounded-md p-6"
      >
        <h1 className="text-3xl text-white font-bold mb-2">Login in</h1>
        <p className="text-gray-200 mb-4">
        </p>

        <form className="flex flex-col gap-3 text-black">
          <label className="text-white"> UserName</label>
          <input
            className="rounded-md px-3 py-2 outline-none border border-gray-300 focus:border-blue-500"
            value={userName}
            name="UserName"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="UserName"
          />

          <label className="text-white">Password</label>
          <input
            className="rounded-md px-3 py-2 outline-none border border-gray-300 focus:border-blue-500"
            value={password}
            name="Password"
            onChange={(e) => setPassWord(e.target.value)}
            type="Password"
            placeholder="Password"
          />
 
 <button
            onClick={HandelFormSubmit}
            className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>

        </form>
      </div>
    </div>
  );
}
