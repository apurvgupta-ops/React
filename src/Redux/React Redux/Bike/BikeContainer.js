import React from "react";
import { connect } from "react-redux";
import { buybike } from "./BikeAction";

const BikeContainer = (props) => {
  return (
    <div>
      <h1>No of Bikes - {props.noOfBikes}</h1>
      <button onClick={props.buybike}>Buy Bikes</button>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    noOfBikes: state.bike.noOfBikes,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    buybike: () => dispatch(buybike()),
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(BikeContainer);
