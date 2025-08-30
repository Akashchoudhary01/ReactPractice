import { FaCheck, FaRegTrashCan } from "react-icons/fa6";

export default function DisplayTodo({
  checked,
  onHandelDeleteTodo,
  onHandelCheckedTodo,
  data,
}) {
  return (
    <div className="w-full">
      <li
        className="flex justify-between items-center bg-zinc-900 px-4 py-3 m-2 rounded-lg shadow-md text-base sm:text-lg
                   w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto min-h-[60px]"
      >
        {/* Task Text */}
        <span
          className={`flex-1 overflow-x-auto whitespace-nowrap scrollbar-none pr-2 ${
            checked ? "line-through opacity-50" : ""
          }`}
        >
          {data}
        </span>

        {/* Action Buttons */}
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => onHandelCheckedTodo(data)}
            className="text-green-500 hover:text-green-400"
          >
            <FaCheck size={18} />
          </button>
          <button
            onClick={() => onHandelDeleteTodo(data)}
            className="text-red-500 hover:text-red-400"
          >
            <FaRegTrashCan size={18} />
          </button>
        </div>
      </li>
    </div>
  );
}
