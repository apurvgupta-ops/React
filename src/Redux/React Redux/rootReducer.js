import { combineReducers } from "redux";
import BikeReducer from "./Bike/BikeReducer";
import reducer from "./Car/carReducer";

export const rootreducer = combineReducers({
  car: reducer,
  bike: BikeReducer,
});
