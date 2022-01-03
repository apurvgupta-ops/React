//Action

const Buy_cake = "Buy_cake";

const Buy_cake = () => {
  return {
    type: Buy_cake,
  };
};

//Reducer

const initialState = {
  numofcakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Buy_cake":
      return {
        ...state,
        numofcakes: state.numofcakes - 1,
      };
    default:
      return state;
  }
};
