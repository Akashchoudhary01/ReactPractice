import React, {  useState } from 'react'

export default function ContectForm() {
    const[ user , setUser] = useState({
        fullname:"",
        email:"",
        message:""

    });

    const setForm = (event)=>{
        const {name , value} = event.target;
        setUser((prev)=>
        ({ ...prev , [name]:value})
        )
    }

       const  handelFormSubmit= (e)=>{
        e.preventDefault();
        const Logindata = user
        console.log(user);
        
    }



  return (
  <div className="h-screen w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 flex items-center justify-center">
    <div className="h-auto w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] bg-white rounded-xl shadow-2xl p-8">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Contact Form
      </h1>

      {/* Form */}
      <form onSubmit={handelFormSubmit} className="flex flex-col gap-4">
        
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="fullname" className="text-gray-700 mb-1 font-medium">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            name="fullname"
            value={user.fullname}
            onChange={setForm}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user.email}
            onChange={setForm}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-700 mb-1 font-medium">
            Message
          </label>
          <textarea
            placeholder="Write your message..."
            name="message"
            value={user.message}
            onChange={setForm}
            className="border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handelFormSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

}
