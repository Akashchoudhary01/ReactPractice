import React, { useState } from "react";
import DateTime from "./DateTime";
import InputBox from "./InputBox/inputBox";
import DisplayTodo from "./DisplayTodo/DisplayTodo";
import ClearAll from "./DisplayTodo/ClearAll";

export default function Todo() {
  const [task, setTask] = useState([]);

  const handelFormSubmit = (value) => {
    if (!value) return;
    if (task.includes(value)) return;
    setTask((prevTask) => [...prevTask, value]); //save the task in an array
  };

  const removeSelectdTodo = (value) => {
    const updatedtask = task.filter((currElem) => currElem !== value);
    setTask(updatedtask);
  };

  const RemoveAllTodo = () => {
    setTask([]);
  }

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
        <InputBox saveTodo={handelFormSubmit} />
        <div>
          <ul className="m-4 w-full grid grid-cols-2 ">
            {task.map((currElem, index) => (
              <DisplayTodo
                key={index}
                data={currElem}
                onHandelDeleteTodo={removeSelectdTodo}
              />
            ))}
          </ul>
        </div>

        
        {/* ClearAllTask */}
         {task.length > 2 && (
           <ClearAll onDeleteAllTodo = {RemoveAllTodo} />
         
        )}
      </div>
    </div>
  );
}

