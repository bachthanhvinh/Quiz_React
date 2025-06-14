export const FETCH_USER_LOGIN_SUCCESS = " FETCH_USER_LOGIN_SUCCESS";
export const USER_LOGOUT_SUCCESS = " USER_LOGOUT_SUCCESS";
export const UPDATE_NEWDATA_PROFILE = " UPDATE_NEWDATA_PROFILE";
export const doLogin = (data) => {
  return {
    type: FETCH_USER_LOGIN_SUCCESS,
    payLoad: data,
  };
};
export const doLogOut = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};
export const newDataProfile = (newdata) => {
  return {
    type: UPDATE_NEWDATA_PROFILE,
    payLoad: newdata,
  };
};
