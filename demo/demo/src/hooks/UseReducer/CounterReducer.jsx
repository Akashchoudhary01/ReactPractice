import React, { useReducer } from "react";

const initialState = {
  count: 0,
  dec: 2,
  inc: 2,
};

const reducer = (state, action) => {
  switch (action.value) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default function CounterReducer() {
  const [state, dispacher] = useReducer(reducer, initialState);
  return (
    <div className="h-lvh flex flex-col justify-center items-center">
      <h1 className="text-4xl  ">{state.count}</h1>
      <div className="flex flex-row mt-5 gap-3">
        <button
          onClick={() => dispacher({ value: "INCREMENT" })}
          className="text-3xl px-4 outline-1 py-1.5 rounded-md bg-green-500"
        >
          Increment
        </button>

        <button
          onClick={() => dispacher({ value: "DECREMENT" })}
          className="text-3xl outline-1 px-4 py-1.5 rounded-md bg-yellow-500"
        >
          Increment
        </button>

        <button
          onClick={() => dispacher({ value: "RESET" })}
          className="text-3xl outline-1 px-4 py-1.5 rounded-md bg-red-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
