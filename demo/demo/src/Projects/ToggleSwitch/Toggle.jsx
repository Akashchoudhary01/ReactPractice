import React, { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="bg-white flex h-screen justify-center flex-col items-center">
      <h1 className="text-3xl fixed top-14">Toggle Switch</h1>

      <div
        className="px-7 py-4 rounded-2xl cursor-pointer"
        onClick={handleToggleSwitch}
      >
        <div
          className={`w-30 h-12 flex items-center rounded-3xl p-1 transition-colors duration-300 ${
            isOn ? "bg-green-500 justify-end" : "bg-red-700 justify-start"
          }`}
        >
          <span
            className={`w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[10px] font-semibold transition-transform duration-300`}
          >
            {isOn ? "On" : "Off"}
          </span>
        </div>
      </div>
    </div>
  );
}
