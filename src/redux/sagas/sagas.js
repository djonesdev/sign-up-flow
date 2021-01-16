import { push } from "react-router-redux";
import { takeLatest, put } from "redux-saga/effects";
import { registerApi } from "../../api/register";
import {
  registerUserFailureType,
  registerUserSuccessType,
  registerUserType,
  authenticateUserSuccessType,
  authenticateUserFailureType,
} from "../actions/actionTypes";

export function* register(payload) {
  try {
    const result = yield registerApi.register(payload);
    yield put({ type: registerUserSuccessType, payload: result.data });
    yield registerApi.authenticateUser()
    yield put(push("/Confirmation"));
  } catch (error) {
    yield put({ type: registerUserFailureType, payload: error });
    yield put(push("/Confirmation"));
    console.error(error);
  }
}

export function* authenticateUser() {
  try {
    const userDetails = {};
    const result = yield registerApi.authenticateUser(userDetails);
    yield put({ type: authenticateUserSuccessType, payload: result.data });
  } catch (error) {
    console.error(error);
    yield put({ type: authenticateUserFailureType, payload: error });
  }
}

export function* getUserList() {
  try {
    const result = yield registerApi.getOptInUsers()
    console.log(result, 'get user list results')
  } catch (error) {
    console.error(error)
  }
}

export default function* rootSaga() {
  yield takeLatest(registerUserType, register);
}
