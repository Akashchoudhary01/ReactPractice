import React from "react";

export default function PostCard({ title, body, id, onDelete , handelUpdateData  }) {
  return (
    <div
      className=" border px-8 py-3 overflow-hidden rounded-xl shadow-md bg-zinc-300 
                    hover:shadow-lg "
    >
      <h2>{id}.</h2>

      <h1 className="text-3xl font-semibold mb-2 text-blue-600">
        <span className="font-bold text-blue-600">title :</span>
        {title}
      </h1>
      <hr className="my-2" />
      <p className="text-gray-600 text-2xl">
        <span className="font-bold text-black">News : </span>
        {body}
      </p>
      <div className="p-3 gap-2">
        <button
         onClick={handelUpdateData}
         className="bg-green-500 text-xl px-4 py-1 rounded-md mr-3 outline-1 ">
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 text-xl px-4 py-1 rounded-md outline-1 ">
        
          Delete
        </button>
      </div>
    </div>
  );
}
