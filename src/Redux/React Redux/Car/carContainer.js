import React, { useState } from "react";
import { connect } from "react-redux";
import { buycar } from "./carActions";

const CarContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>No of Cars - {props.noOfCars}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buycar(number)}>Buy {number} Cars</button>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    noOfCars: state.car.noOfCars,
  };
};

const maDispatchToProp = (dispatch) => {
  return {
    buycar: (number) => dispatch(buycar(number)),
  };
};

export default connect(mapStateToProp, maDispatchToProp)(CarContainer);
