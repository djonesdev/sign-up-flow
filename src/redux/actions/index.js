import { authenticateUserType, getUserListType, registerUserType } from './actionTypes'

export const registerUser = payload => ({ type: registerUserType, payload })

export const autheticateUser = () => ({ type: authenticateUserType })

export const getUserList = () => ({ type: getUserListType })