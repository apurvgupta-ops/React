import { createStore } from "redux";
import reducer from "./Car/carReducer";

const store = createStore(reducer);
export default store;
