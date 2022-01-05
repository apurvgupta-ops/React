import { combineReducers } from "redux";
import BikeReducer from "./Bike/BikeReducer";
import reducer from "./Car/carReducer";
import userReducer from "../React Redux Async Action/UserReducer";

export const rootreducer = combineReducers({
  car: reducer,
  bike: BikeReducer,
  user: userReducer,
});
