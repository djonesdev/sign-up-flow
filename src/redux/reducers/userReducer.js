const initialState = {
  isAuthenticated: false,
  auth: {},
  userDetails: {}
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER_START":
      return {
        ...state,
        userDetails: action.payload,
        loading: true,
      };
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        auth: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case "REGISTER_USER_FAILED":
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};
