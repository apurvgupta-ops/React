import React from "react";
import { Provider } from "react-redux";
import store from "./Store";

import CarcontainerHooks from "./Car/CarcontainerHooks";
import Car from "./Car/carContainer";
import BikeContainer from "./Bike/BikeContainer";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CarcontainerHooks />
        <BikeContainer />
        <Car />
      </div>
    </Provider>
  );
};

export default App;
