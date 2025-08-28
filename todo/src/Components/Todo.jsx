import React, { useState } from "react";
import { FaCheck, FaRegTrashCan } from "react-icons/fa6";

export default function Todo() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handelInputSubmit = (value) => {
    setInput(value);
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();

    if (!input) return; //check the input is not empty

    if (task.includes(input)) {
      //check for duplicate task
      setInput(""); // empty the input fild
      return;
    }

    setTask((prevTask) => [...prevTask, input]); //save the task in an array

    setInput(""); // after adding empty the input fild
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
      {/* Container aligned top center */}
      <div className="flex flex-col items-center pt-12">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-8 tracking-wide text-green-400">
          Todo List
        </h1>

        {/* Card Container */}
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

        <div>
          <ul className="m-4 w-full grid grid-cols-2 w-full">
            {task.map((currElem, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-zinc-900 px-4 py-3 m-3 rounded-lg shadow-md text-lg w-96 h-[60px]"
              >
                {/* Task Text with scroll */}
                <span className="flex-1 overflow-x-auto whitespace-nowrap scrollbar-none pr-2">
                  {currElem}
                </span>

                {/* Action Buttons */}
                <div className="flex gap-3 flex-shrink-0">
                  <button className="text-green-500 hover:text-green-400">
                    <FaCheck />
                  </button>
                  <button className="text-red-500 hover:text-red-400">
                    <FaRegTrashCan />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
