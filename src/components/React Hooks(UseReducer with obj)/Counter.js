import React, { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (currState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currState,
        firstCounter: currState.firstCounter + action.value,
      };
    case "decrement":
      return {
        ...currState,
        firstCounter: currState.firstCounter - action.value,
      };
    case "increment5":
      return {
        ...currState,
        secondCounter: currState.secondCounter + action.value,
      };
    case "decrement5":
      return {
        ...currState,
        secondCounter: currState.secondCounter - action.value,
      };
    case "reset":
      return initialState;

    default:
      return currState;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      count = {count.firstCounter}
      count = {count.secondCounter}
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment5", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement5", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
