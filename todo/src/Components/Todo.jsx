import React, { useState, useEffect } from "react";
import DateTime from "./DateTime";
import InputBox from "./InputBox/inputBox";
import DisplayTodo from "./DisplayTodo/DisplayTodo";
import ClearAll from "./DisplayTodo/ClearAll";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  setTodoDataToLocalStorage,
  getTodoDataFromLocalStorage,
} from "./LocalStorage/LocalStorage";

export default function Todo() {
  const [task, setTask] = useState(() => getTodoDataFromLocalStorage());

  const handelFormSubmit = (input) => {
    const { id, content, checked } = input;
    if (!content) {
      toast.error("⚠️ Task cannot be empty!");
      return;
    }

    // check if the todo already exists
    const todoMatch = task.find((currTask) => currTask.content === content);
    if (todoMatch) {
      toast.warning("⚠️ Task already exists!");
      return;
    }

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
    toast.success("✅ Task added successfully!");
  };

  // Save whenever task changes
  useEffect(() => {
    setTodoDataToLocalStorage(task);
  }, [task]);

  const removeSelectdTodo = (value) => {
    const updatedtask = task.filter((currElem) => currElem.content !== value);
    setTask(updatedtask);
    toast.success("🗑️ Todo deleted successfully!");
  };

  const checkedSelectedTodo = (content) => {
    const updatedTask = task.map((currTask) =>
      currTask.content === content
        ? { ...currTask, checked: !currTask.checked }
        : currTask
    );
    setTask(updatedTask);
    toast.info("✅ Status updated!");
  };

  const RemoveAllTodo = () => {
    setTask([]);
    toast.error("❌ All tasks cleared!");
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
        {/* Input */}
        <InputBox saveTodo={handelFormSubmit} />
        
        {/* Todo List */}
        <div>
          <ul className="m-4 w-full grid grid-cols-2">
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

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}
