import React, { useState } from "react";

export default function NewRegistration() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const HandelInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const HandelFormSubmit = (e) => {
    e.preventDefault();
  };

  localStorage.setItem("userDetails", JSON.stringify(user));

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
        <h1 className="text-3xl text-white font-bold mb-2">Sign in</h1>
        <p className="text-gray-200 mb-4">
          Please fill this form to create an account!
        </p>

        <form className="flex flex-col gap-3 text-black">
          <label className="text-white">First Name</label>
          <input
            className="rounded-md px-3 py-2 outline-none border border-gray-300 focus:border-blue-500"
            value={user.firstName}
            name="firstName"
            onChange={HandelInputChange}
            type="text"
            placeholder="First Name"
          />

          <label className="text-white">Last Name</label>
          <input
            className="rounded-md px-3 py-2 outline-none border border-gray-300 focus:border-blue-500"
            value={user.lastName}
            name="lastName"
            onChange={HandelInputChange}
            type="text"
            placeholder="Last Name"
          />

          <label className="text-white">Email</label>
          <input
            className="rounded-md px-3 py-2 outline-none border border-gray-300 focus:border-blue-500"
            value={user.email}
            name="email"
            onChange={HandelInputChange}
            type="email"
            placeholder="xyz@gmail.com"
          />

          <label className="text-white">Password</label>
          <input
            className="rounded-md px-3 py-2 outline-none border border-gray-300 focus:border-blue-500"
            value={user.password}
            name="password"
            onChange={HandelInputChange}
            type="password"
            placeholder="Password"
          />

          <label className="text-white">Phone Number</label>
          <input
            className="rounded-md px-3 py-2 outline-none border border-gray-300 focus:border-blue-500"
            value={user.phoneNumber}
            name="phoneNumber"
            onChange={HandelInputChange}
            type="text"
            placeholder="Phone Number"
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
