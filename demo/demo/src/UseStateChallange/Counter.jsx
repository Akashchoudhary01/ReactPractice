import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);

  const Increment = ()=>{
    if(count > 100) {
        alert("limit exide (1 - 100)") 
        return;
    }
    setCount ((prevCount)=> prevCount + steps);
  }
  const Decrement = ()=>{
      if(count < 1) {
        alert("limit exide (1 - 100)") 
        return;
    }
    setCount ((prevCount)=> prevCount-steps);
  }
  const Reset = ()=>{
    setCount (0);
  }
  const ManageInput = (e)=>{
    setSteps(Number(e.target.value));
  }



  return (
    <div className="w-full h-screen  bg-gradient-to-r  from-red-500 via-purple-600 to-black justify-center items-center flex">
      <div className="w-[60%] h-[70%] rounded-xl bg-purple-200">
        <div className="p-5">
          <h1 className="text-4xl p-3 tracking-widest bg-gradient-to-r text-center from-red-500 via-purple-600 to-black bg-clip-text text-transparent pb-10 ">
            Counter App
          </h1>

          <div className="  flex flex-row text-3xl p-6">
            <h2>Count :&nbsp;  </h2>  
            
            <h2 className="">{count}</h2>
          </div>
          <div className=" flex flex-row text-3xl pl-5">
            <h2>Steps : &nbsp;</h2>
            <input className="outline-1 rounded-xl text-center" type="number" onChange={ManageInput}  value={steps} />
          </div>
          <div className=" pt-20 flex flex-row justify-evenly">
            <button
            onClick={Increment}
             className="px-2 py-1 ouline-1 outline-black rounded-xl bg-blue-500 text-black text-xl active:bg-amber-400 active:text-white">
                Increment</button>
            <button
            onClick={Decrement}
             className="px-2 py-1 ouline-1 outline-black rounded-xl bg-blue-500 text-black text-xl active:bg-amber-400 active:text-white">
                Decrement</button>
            <button
            onClick={Reset}
             className="px-2 py-1 ouline-1 outline-black rounded-xl bg-blue-500 text-black text-xl active:bg-amber-400 active:text-white"
             >Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}
