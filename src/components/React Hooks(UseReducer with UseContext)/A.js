import React, { useContext } from "react";
import { countContext } from "./App";

const A = () => {
  const data = useContext(countContext);
  return (
    <div>
      A =
      <button onClick={() => data.countDispatcher("increment")}>
        Increment
      </button>
      <button onClick={() => data.countDispatcher("decrement")}>
        Decrement
      </button>
      <button onClick={() => data.countDispatcher("reset")}>Reset</button>
    </div>
  );
};

export default A;
