import React from "react";
import { Provider } from "react-redux";
import store from "./Store";

import CarcontainerHooks from "./Car/CarcontainerHooks";
import Car from "./Car/carContainer";
import BikeContainer from "./Bike/BikeContainer";
import UserContainer from "../React Redux Async Action/UserContainer";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <UserContainer />
        {/* <CarcontainerHooks /> */}
        {/* <BikeContainer /> */}
        {/* <Car /> */}
      </div>
    </Provider>
  );
};

export default App;
