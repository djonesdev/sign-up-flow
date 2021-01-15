import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";

export default combineReducers({
  simpleReducer,
  routing: routerReducer,
});
