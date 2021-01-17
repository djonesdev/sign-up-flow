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
} from "../actions/actionTypes";
import { selectUserAuthInfo, selectUserInfo } from "../selectors";

export function* register(payload) {
  try {
    const result = yield registerApi.register(payload);
    yield put({ type: registerUserSuccessType, payload: result.data });
    yield put(push("/Confirmation"));
  } catch (error) {
    yield put({ type: registerUserFailureType, payload: error });
    yield put(push("/SignUpError"));
    console.error(error);
  }
}

export function* authenticateUser() {
  console.log('saga called')
  try {
    const userState = yield select(selectUserInfo)
    console.log(userState, 'userDetails')
    const result = yield registerApi.authenticateUser(`${userState.userDetails.firstName} ${userState.userDetails.surname}`);
    console.log('result', result)
    yield put({ type: getUserListType });
    // yield put({ type: authenticateUserSuccessType, payload: result.data });
  } catch (error) {
    // console.error(error);
    // yield put({ type: authenticateUserFailureType, payload: error });
  }
}

export function* getUserList() {
  console.log('get user list saga called')
  try {
    const authState = yield select(selectUserAuthInfo)
    if(authState.accessToken) {
      console.log(authState, 'get user authState')
      const result = yield registerApi.getOptInUsers(authState.externalId, authState.accessToken)
      console.log(result, 'get user list results')
    }
  } catch (error) {
    console.error(error)
  }
}

export default function* rootSaga() {
  yield takeLatest(registerUserType, register);
  yield takeLatest(getUserListType, getUserList);
  yield takeLatest(authenticateUserType, authenticateUser);
}
