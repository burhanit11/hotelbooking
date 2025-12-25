"use client";

export default function TestCrash() {
  // Force an error
  throw new Error("Test error: Component crashed!");

  return <div>This will never render</div>;
}
