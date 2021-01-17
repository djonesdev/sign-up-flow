import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { userReducer as userInfo } from "./userReducer";

export default combineReducers({
  userInfo,
  routing: routerReducer,
});
