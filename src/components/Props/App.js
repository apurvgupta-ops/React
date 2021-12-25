import React from "react";
import Greet from "./Greet";

const App = () => {
  return (
    <div>
      <Greet name="Apurv">
        <p>this is Apurv Gupta</p>
      </Greet>
      <Greet name="Sankalp">
        <button>Submit</button>
      </Greet>
      <Greet name="appu" />
    </div>
  );
};

export default App;
