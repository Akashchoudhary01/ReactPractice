import React, { useState } from 'react'

export default function InputBox({saveTodo}) {
const [input , setInput] = useState("");

    const handelInputSubmit = (value) => {
    setInput(value);
    };

    const handelFormSubmit = (e)=>{
      e.preventDefault();
      saveTodo(input);
      setInput(""); // after adding empty the input fild
    }

  return (
    <div>
       <div className="bg-zinc-800/70 backdrop-blur-md shadow-xl rounded-2xl p-8 w-[90%] sm:w-[450px]">
                <form onSubmit={handelFormSubmit} className="flex">
                  {/* Input */}
                  <input
                    type="text"
                    autoComplete="off"
                    value={input}
                    onChange={(e) => handelInputSubmit(e.target.value)}
                    placeholder="Add your todo..."
                    className="flex-1 px-4 py-3 rounded-l-xl bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:border-green-500 transition"
                  />
                  {/* Button */}
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-500 active:bg-green-700 text-lg font-semibold px-6 rounded-r-xl transition duration-200"
                  >
                    Add
                  </button>
                </form>
              </div>
      
    </div>
  )
}
