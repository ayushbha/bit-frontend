import * as actionTypes from "./actionTypes";

export const login = () => {
  return {
    type: actionTypes.STUDENT_LOGIN
  };
};

export const logout = () => {
  return {
    type: actionTypes.USER_LOGOUT
  };
};