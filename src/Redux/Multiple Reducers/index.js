const redux = require("redux");
const middleware = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = middleware.createLogger();

// Action
const Car = "Car";
const Bike = "Bike";

const car = () => {
  return {
    type: Car,
  };
};

const bike = () => {
  return {
    type: Bike,
  };
};

//Reducers
const initialCarState = {
  cars: 10,
};

const initialBikeState = {
  bikes: 20,
};

const carReducers = (state = initialCarState, action) => {
  switch (action.type) {
    case "Car":
      return {
        cars: state.cars - 1,
      };
    default:
      return state;
  }
};

const bikeReducers = (state = initialBikeState, action) => {
  switch (action.type) {
    case "Bike":
      return {
        bikes: state.bikes - 1,
      };
    default:
      return state;
  }
};

//Store
const root = combineReducers({
  car: carReducers,
  bike: bikeReducers,
});

const store = createStore(root, applyMiddleware(logger));
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("update State", store.getState())
);
store.dispatch(car());
store.dispatch(car());
store.dispatch(bike());
store.dispatch(bike());
store.dispatch(bike());

unsubscribe();
