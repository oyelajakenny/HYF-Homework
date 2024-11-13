"use client";
import React, { useState } from "react";
import {
  TodoProvider,
  useTodos,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "./TodoContext"; // Adjust import path as necessary

function TodoList() {
  const { state: todos, dispatch } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: ADD_TODO, payload: newTodo });
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: REMOVE_TODO, payload: id });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: TOGGLE_TODO, payload: id });
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 border border-black rounded">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <div className="mt-4 flex space-x-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          className="border border-gray-400 rounded px-2 py-1"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Todo
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center space-x-4 mt-2">
            <span
              onClick={() => handleToggleTodo(todo.id)}
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main page component
export default function TodoPage() {
  return (
    <TodoProvider>
      <div className="flex items-center justify-center min-h-screen">
        <TodoList />
      </div>
    </TodoProvider>
  );
}
