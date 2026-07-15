"use client";
import React from "react";

export default function Error({ error, reset }) {
  return (
    <div className="p-4 text-red-500">
      Page Error: {error.message}
      <button onClick={reset} className="ml-2 text-blue-500 underline">
        Try Again
      </button>
    </div>
  );
}
