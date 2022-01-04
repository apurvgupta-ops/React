import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buycar } from "./carActions";
const CarcontainerHooks = () => {
  const noofcars = useSelector((state) => state.noOfCars);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>No of cars = {noofcars}</h1>
      <button onClick={() => dispatch(buycar())}>Buy cars</button>
    </div>
  );
};

export default CarcontainerHooks;
