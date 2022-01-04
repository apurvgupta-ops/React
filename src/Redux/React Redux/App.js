import React from "react";
import { Provider } from "react-redux";
import store from "./carStore";

import CarcontainerHooks from "./Car/CarcontainerHooks";
import Car from "./Car/carContainer";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CarcontainerHooks />
        <Car />
      </div>
    </Provider>
  );
};

export default App;
