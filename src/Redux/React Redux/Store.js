import { applyMiddleware, createStore } from "redux";
import { rootreducer } from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
