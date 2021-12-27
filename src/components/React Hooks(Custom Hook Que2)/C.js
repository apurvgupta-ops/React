import React, { useState } from "react";
import useCounter from "./useCounter";

const C = () => {
  const [count, increment, decrement, reset] = useCounter(0, 2);
  return (
    <div>
      <h1>count {count}</h1>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default C;
