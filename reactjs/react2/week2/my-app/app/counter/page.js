"use client";
import React from "react";
import { CounterProvider, useCounter } from "./Counter";

function CounterDisplay() {
  const { state, dispatch } = useCounter();

  return (
    <div className="flex flex-col items-center justify-center p-4 border border-black rounded">
      <h1 className="text-2xl font-bold">Counter: {state.count}</h1>
      <div className="mt-4 flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </button>
      </div>
    </div>
  );
}

// Main page component that uses CounterProvider to wrap CounterDisplay
export default function CounterPage() {
  return (
    <CounterProvider>
      <div className="flex items-center justify-center min-h-screen">
        <CounterDisplay />
      </div>
    </CounterProvider>
  );
}
