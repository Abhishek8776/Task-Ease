import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (event) => {
    event.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler} className="space-x-3">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8  transition-colors duration-200 ease-in-out"
        placeholder="Enter todo"
        value={input}
        onChange={(event)=>setInput(event.target.value)}
      />
      <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg">Add</button>
    </form>
  );
}

export default AddTodo;
