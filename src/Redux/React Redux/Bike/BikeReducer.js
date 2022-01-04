import { BUY_BIKE } from "./BikeTypes";

const initialState = {
  noOfBikes: 100,
};

const BikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BIKE:
      return {
        ...state,
        noOfBikes: state.noOfBikes - 1,
      };

    default:
      return state;
  }
};

export default BikeReducer;
