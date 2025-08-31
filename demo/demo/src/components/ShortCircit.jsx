import React, { useState } from "react";

export default function ShortCircit() {
  const [useloggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");

  return (
    <div className=" h-screen p-4 w-full bg-gradient-to-tl gap-y-8  from-red-700 via-purple-700 to-pink-600 justify-top flex flex-col align-center items-center">
      <h1 className="text-black  text-4xl  bg-clip-text">
        Welcome to the ShortCircit Evelution !{" "}
      </h1>
      <div className="w-[50%] h-72 p-16 bg-white outline-1 items-center rounded-xl text-center">
        {
          <p className="text-2xl text-black  font-extralight tracking-wider">
            {useloggedIn && "You Are Loggedin"}
          </p>
          
        }
           <p className="text-2xl text-black  font-extralight tracking-wider">
            {!useloggedIn && "Please Login"}
           </p>
        <p className="text-2xl text-black  font-extralight tracking-wider">
          {useloggedIn && user ? `hello${user}` : "Please set User"}
        </p>
        <div className=" flex justify-between rounded-md mt-12 gap-4 ">
          <button
            onClick={() => setIsLoggedIn(!useloggedIn)}
            className="px-2 py-1 bg-green-500 text-white rounded-xl"
          >
            {useloggedIn ? "Logout" : "Login"}
          </button>
          <button
            onClick={() => setUser("Akash")}
            className="px-2 py-1 bg-green-500 text-white rounded-xl"
          >
            set User
          </button>
          <button onClick={() => setUser("")}
          className="px-2 py-1 bg-green-500 text-white rounded-xl">
            Clear User
          </button>
        </div>
      </div>
    </div>
  );
}
