import React, { useReducer } from "react";
import A from "./A";
import B from "./B";
import C from "./C";

const initialState = 0;
const reducer = (currState, action) => {
  switch (action) {
    case "increment":
      return currState + 1;

    case "decrement":
      return currState - 1;

    case "reset":
      return initialState;

    default:
      return currState;
  }
};

export const countContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <countContext.Provider
      value={{ countstate: state, countDispatcher: dispatch }}
    >
      <div>count -{state}</div>
      <div>
        <A />
        <B />
        <C />
      </div>
    </countContext.Provider>
  );
};

export default App;
