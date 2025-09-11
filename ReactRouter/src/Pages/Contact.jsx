import React from 'react'
import { Form } from 'react-router-dom';

export const FormHandel= async({request})=>{
  const res = await request.formData();
  const data = Object.fromEntries(res);
  console.log(data);
  return null;
  

}

export default function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen  px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>

        <Form method='post' action='/contact' 
        className="flex flex-col gap-5">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-gray-700 font-medium">Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              required 
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700 font-medium">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="abc@gmail.com" 
              required 
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-gray-700 font-medium">Message</label>
            <textarea 
              name="message" 
              placeholder="Write your message here..." 
              required 
              rows="4"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>

          {/* Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </Form>
      </div>
    </div>
    
  )
}
