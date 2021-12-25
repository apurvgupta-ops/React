import React, { useState } from "react";

const Hook = () => {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevcount) => prevcount + 1);
    }
  };

  return (
    <div>
      <h1>count {count}</h1>
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={() => setCount((ps) => ps + 1)}>Increment</button>
      <button onClick={() => setCount((ps) => ps - 1)}>Decrement</button>
      <button onClick={incrementFive}>incrementFive</button>
    </div>
  );
};

export default Hook;
