const initialState = {
  value: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};
