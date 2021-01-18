import { push } from "react-router-redux";
import { takeLatest, put, select } from "redux-saga/effects";
import { registerApi } from "../../api/register";
import {
  registerUserFailureType,
  registerUserSuccessType,
  registerUserType,
  authenticateUserSuccessType,
  authenticateUserFailureType,
  getUserListType,
  authenticateUserType,
  getUserListSuccessType,
  getUserListFailureType,
} from "../actions/actionTypes";
import { selectUserAuthInfo, selectUserInfo } from "../selectors";

export function* register(payload) {
  try {
    const result = yield registerApi.register(payload);
    yield put({ type: registerUserSuccessType, payload: result.data });
    console.log('Saga successful')
    yield put(push("/Confirmation"));
  } catch (error) {
    console.log('Saga Error')
    yield put({ type: registerUserFailureType, payload: error });
    yield put(push("/SignUpError"));
    console.error(error);
  }
}

export function* authenticateUser() {
  try {
    const userState = yield select(selectUserInfo)
    const result = yield registerApi.authenticateUser(`${userState.userDetails.firstName} ${userState.userDetails.surname}`, userState.userDetails.password);
    yield put({ type: getUserListType });
    yield put({ type: authenticateUserSuccessType, payload: result.data });
  } catch (error) {
    console.error(error);
    yield put({ type: authenticateUserFailureType, payload: error });
  }
}

export function* getUserList() {
  try {
    const authState = yield select(selectUserAuthInfo)
    if(authState.accessToken) {
      const result = yield registerApi.getOptInUsers(authState.externalId, authState.accessToken)
      yield put({ type: getUserListSuccessType, payload: result.data });
    }
  } catch (error) {
    console.error(error)
    yield put({ type: getUserListFailureType, error: error });
  }
}

export default function* rootSaga() {
  yield takeLatest(registerUserType, register);
  yield takeLatest(getUserListType, getUserList);
  yield takeLatest(authenticateUserType, authenticateUser);
}
