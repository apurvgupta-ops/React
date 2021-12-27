import React, { useState, useEffect } from "react";
import useDocTitle from "./useDocTitle";

const Counter = () => {
  const [count, setCount] = useState(0);
  useDocTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count -- {count}</button>
    </div>
  );
};

export default Counter;
