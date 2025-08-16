import React from "react";
import Icons from "../Components/Icons";

export default function Card({ gameEnd ,  player , onPlay , index }) {
  let icon = <Icons />;
  if (player === "x") {
    icon = <Icons name="cross" />;
  } else if (player === "o") {
    icon = <Icons name="circle" />;
  }

  return (
    <div
      className="outline outline-2 outline-black p-8
      flex justify-center items-center w-28 h-28
      rounded-md shadow-[4px_4px_0px_#000] 
      hover:translate-y-1 hover:shadow-[2px_2px_0px_#000] 
      transition-all bg-white"
    onClick={()=>player =="" && !gameEnd && onPlay(index)} >
      {icon}
    </div>
  );
}
