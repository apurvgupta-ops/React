const { default: axios } = require("axios");
const redux = require("redux");
const thunk = require("redux-thunk").default;
const applymiddleware = redux.applyMiddleware;
const createStore = redux.createStore;

//STATE
const initialState = {
  loading: false,
  users: [],
  error: "",
};

//Actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchsUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchsUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchsUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

//Reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        loading: true,
      };

    case "FETCH_USERS_SUCCESS":
      return {
        loading: false,
        users: action.payload,
      };

    case "FETCH_USERS_FAILURE":
      return {
        loading: true,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchsUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((Response) => {
        const users = Response.data.map((user) => user.name);
        dispatch(fetchsUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchsUsersFailure(error.message));
      });
  };
};

//Store
const store = createStore(reducer, applymiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUser());
