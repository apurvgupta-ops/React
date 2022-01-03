// import redux from "redux";
const redux = require("redux");
const createStore = redux.createStore;

//Action
const Buy_cake = "Buy_cake";

const buyCake = () => {
  return {
    type: Buy_cake,
  };
};

//Reducer
const initialState = {
  numofCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Buy_cake":
      return {
        numofCakes: state.numofCakes - 1,
      };
    default:
      return state;
  }
};

//Store

const store = createStore(reducer);
console.log("Initial State", store.getState());
store.subscribe(() => console.log("updated State", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
