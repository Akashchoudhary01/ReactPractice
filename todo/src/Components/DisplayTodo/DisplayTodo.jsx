import { FaCheck, FaRegTrashCan } from "react-icons/fa6";

export default function DisplayTodo({onHandelDeleteTodo , key , data}) {
    

    
  return (
       <div>
              <li
                key={key}
                className="flex justify-between items-center bg-zinc-900 px-4 py-3 m-3 rounded-lg shadow-md text-lg w-96 h-[60px]"
              >
                {/* Task Text with scroll */}
                <span className="flex-1 overflow-x-auto whitespace-nowrap scrollbar-none pr-2">
                  {data}
                </span>

                {/* Action Buttons */}
                <div className="flex gap-3 flex-shrink-0">
                  <button className="text-green-500 hover:text-green-400">
                    <FaCheck />
                  </button>
                  <button
                    onClick={() => onHandelDeleteTodo(data)}
                    className="text-red-500 hover:text-red-400"
                  >
                    <FaRegTrashCan />
                  </button>
                </div>
              </li>
           
        
        </div>
  )
}
