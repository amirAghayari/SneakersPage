import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex items-center space-x-4 !bg-gray-100 p-2 rounded-lg shadow-2xl w-30 h-11 justify-center">
      <button
        className="text-orange-500 w-12 h-12 !bg-gray-300 text-xl font-bold px-2"
        onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
      >
        -
      </button>
      <span className="text-black font-semibold text-lg">{count}</span>
      <button
        className="text-orange-500 w-12 h-12 !bg-gray-300 text-xl font-bold px-2"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
