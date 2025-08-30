import React, { useState  } from "react";
import DateTime from "./DateTime";
import InputBox from "./InputBox/inputBox";
import DisplayTodo from "./DisplayTodo/DisplayTodo";
import ClearAll from "./DisplayTodo/ClearAll";
import { 
  setTodoDataToLocalStorage , 
   getTodoDataFromLocalStorage
  
 } from "./LocalStorage/LocalStorage";


export default function Todo() {
  const [task , setTask] = useState(()=> getTodoDataFromLocalStorage());

  const handelFormSubmit = (input) => {
    const { id, content, checked } = input;
    if (!content) return;

    // check if the todo alredy exits
    const todoMatch = task.find((currTask) => currTask.content === content);
    if (todoMatch) return;
    // if (task.includes(content)) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]); //save the task in an array
  };

   // Save whenever task changes
 
    setTodoDataToLocalStorage(task);
 

  const removeSelectdTodo = (value) => {
    const updatedtask = task.filter((currElem) => currElem.content !== value);
    setTask(updatedtask);
  };

  const checkedSelectedTodo = (content) => {
    const updatedTask = task.map((currTask) =>
      currTask.content === content
        ? { ...currTask, checked: !currTask.checked }
        : currTask
    );
    setTask(updatedTask);
  };

  const RemoveAllTodo = () => {
    setTask([]);
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
        <InputBox saveTodo={handelFormSubmit} />
        <div>
          <ul className="m-4 w-full grid grid-cols-2 ">
            {task.map((currElem) => (
              <DisplayTodo
                key={currElem.id}
                data={currElem.content}
                checked={currElem.checked}
                onHandelDeleteTodo={removeSelectdTodo}
                onHandelCheckedTodo={checkedSelectedTodo}
              />
            ))}
          </ul>
        </div>

        {/* ClearAllTask */}
        {task.length > 2 && <ClearAll onDeleteAllTodo={RemoveAllTodo} />}
      </div>
    </div>
  );
}
