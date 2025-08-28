import React from 'react'

export default function ClearAll({onDeleteAllTodo}) {


     
    return (
        <div>
       
         <button
            className="px-1.5 py-.5 rounded-lg bg-red-600 outline-1 text-black"
            onClick={onDeleteAllTodo}
            >
            Clear All
          </button>
      
    </div>
  )
};

