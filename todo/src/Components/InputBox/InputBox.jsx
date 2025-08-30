import React, { useState } from "react";

export default function InputBox({ saveTodo }) {
  const [input, setInput] = useState({ id: "", content: "", checked: false });

  const handelInputChange = (value) => {
    setInput({ id: Date.now(), content: value, checked: false });
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    if (!input.content.trim()) return; // prevent empty todo
    saveTodo(input);
    setInput({ id: "", content: "", checked: false }); // clear input after adding
  };

  return (
    <div className="w-full flex justify-center">
      <div className="bg-zinc-800/70 backdrop-blur-md shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 w-[95%] sm:w-[450px]">
        <form onSubmit={handelFormSubmit} className="flex">
          {/* Input */}
          <input
            type="text"
            autoComplete="off"
            value={input.content}
            onChange={(e) => handelInputChange(e.target.value)}
            placeholder="Add your todo..."
            className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-l-xl bg-zinc-900 text-white 
                       border border-zinc-700 placeholder:text-zinc-400 
                       focus:outline-none focus:border-green-500 transition text-sm sm:text-base"
          />
          {/* Button */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-500 active:bg-green-700 
                       text-sm sm:text-base font-semibold px-4 sm:px-6 
                       rounded-r-xl transition duration-200"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
