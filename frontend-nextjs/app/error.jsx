"use client";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    toast.error("Something went wrong! Please try again.");
    console.error(error); // log for debugging
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h1>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-primary text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
