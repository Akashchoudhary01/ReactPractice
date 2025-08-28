import React, { useState } from "react";

export default function Problem1() {
  const [User] = useState([
    { name: "Akash", age: 21 },
    { name: "Ajay", age: 22 },
    { name: "Akshay", age: 23 },
    { name: "Rishu", age: 23 },
  ]);

  const count = User.length;
  const AvgAge = User.reduce((acc , currentElem) => acc + currentElem.age , 0)/count;

  return (
    <div className=" bg-zinc-900 text-white text-center h-screen aling-center flex justify-center flex-col ">
      <h1 className="text-3xl m-8">UserList</h1>
      <ul className="gap-4 text-xl">
        {User.map((currentElem , index) => {
            return<>
            <li key={index}>{currentElem.name} is {currentElem.age} year old</li>
            </>
        })}
      </ul>
      <h2>Total User : {count}</h2>
      <h3>Avg age of Users : {AvgAge}</h3>
    </div>
  );
}
