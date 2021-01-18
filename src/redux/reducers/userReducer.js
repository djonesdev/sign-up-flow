const initialState = {
  isAuthenticated: false,
  auth: {},
  userDetails: {}, 
  isLoading: false
};

export const userReducer = (state = initialState, action) => {
  console.log(action, 'reducer action')
  switch (action.type) {
    case "REGISTER_USER_START":
      return {
        ...state,
        userDetails: action.payload,
        isLoading: true,
      };
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        auth: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case "REGISTER_USER_FAILED":
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
