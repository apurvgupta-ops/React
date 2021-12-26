import React from "react";
import A from "./A";

export const nameContext = React.createContext();
export const emailContext = React.createContext();
const App = () => {
  return (
    <div>
      <nameContext.Provider value={"Apurv"}>
        <emailContext.Provider value={"abc@abc.com"}>
          <A />
        </emailContext.Provider>
      </nameContext.Provider>
    </div>
  );
};

export default App;
