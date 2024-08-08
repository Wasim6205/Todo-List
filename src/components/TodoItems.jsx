import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useTodo } from "../context/TodoContext";

const TodoItems = ({ todo }) => {
  const { deleteTodo, toggleComplete } = useTodo();
  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }
  return (
    <div className="flex justify-between border-b border-b-[#996bbf] pb-3 dark:text-white">
      <div className="flex space-x-4 items-center">
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <p className={`font-medium text-xl ${todo.completed ? "line-through" : ""}`}>{todo.task}</p>
      </div>
      <div className="flex space-x-4 items-center">
        <FaRegEdit size={20} className="cursor-pointer" />
        <MdDeleteForever size={20} className="cursor-pointer" onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default TodoItems;
