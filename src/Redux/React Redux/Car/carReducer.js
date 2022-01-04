import { BUY_CAR } from "./carTypes";

const initialState = {
  noOfCars: 100,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAR:
      return {
        ...state,
        noOfCars: state.noOfCars - 1,
      };

    default:
      return state;
  }
};

export default reducer;
