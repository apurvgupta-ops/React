import React from "react";
import { connect } from "react-redux";
import { buycar } from "./carActions";

const carContainer = (props) => {
  return (
    <div>
      <h2>No of Cars - {props.noOfCars}</h2>
      <button onClick={props.buycar}>Buy Cars</button>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    noOfCars: state.noOfCars,
  };
};

const maDispatchToProp = (dispatch) => {
  return {
    buycar: () => dispatch(buycar()),
  };
};

export default connect(mapStateToProp, maDispatchToProp)(carContainer);
