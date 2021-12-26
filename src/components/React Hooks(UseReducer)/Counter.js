import React, { useReducer } from "react";
const initialSate = 0;
const reducer = (currState, action) => {
  switch (action) {
    case "increment":
      return currState + 1;

    case "decrement":
      return currState - 1;

    case "reset":
      return initialSate;

    default:
      return currState;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialSate);
  return (
    <div>
      count - {count}
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default Counter;
