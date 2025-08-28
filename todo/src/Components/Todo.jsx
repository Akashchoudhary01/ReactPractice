import React, { useState } from "react";
import { FaCheck, FaRegTrashCan } from "react-icons/fa6";
import DateTime from "./DateTime";
import InputBox from "./InputBox/inputBox";

export default function Todo() {

  const [task, setTask] = useState([]);


  const handelFormSubmit = (value) => {
    if (!value) return;
    if (task.includes(value)) return;
  

    setTask((prevTask) => [...prevTask, value]); //save the task in an array

   
  };

  // Remove All todos
  const RemoveAllTodo = () => {
    setTask([]);
  };

  //Remove Specific todo

  const removeSelectdTodo = (value) => {
    const updatedtask = task.filter((currElem) => currElem !== value);
    setTask(updatedtask);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white">
      {/* Container aligned top center */}
      <div className="flex flex-col items-center pt-12">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 tracking-wide text-green-400">
          Todo List
        </h1>
        {/* Date and time */}
        <DateTime />
        {/* Card Container */}
        <InputBox saveTodo={handelFormSubmit}/>
       

        <div>
          <ul className="m-4 w-full grid grid-cols-2 ">
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
                  <button
                    onClick={() => removeSelectdTodo(currElem)}
                    className="text-red-500 hover:text-red-400"
                  >
                    <FaRegTrashCan />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {task.length > 2 && (
          <button
            className="px-1.5 py-.5 rounded-lg bg-red-600 outline-1 text-black"
            onClick={RemoveAllTodo}
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}
