import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./UserTypes";

export const fetchsUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchsUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchsUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchsUsersRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        // console.log(res.data);
        dispatch(fetchsUsersSuccess(users));
      })
      .catch((err) => {
        dispatch(fetchsUsersFailure(err.message));
      });
  };
};
