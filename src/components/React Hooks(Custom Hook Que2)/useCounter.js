import { useState } from "react";

const useCounter = (initial, value) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount((count) => count + value);
  };

  const decrement = () => {
    setCount((count) => count - value);
  };

  const reset = () => {
    setCount(initial);
  };

  return [count, increment, decrement, reset];
};

export default useCounter;
