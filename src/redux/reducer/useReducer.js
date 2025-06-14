import {
  FETCH_USER_LOGIN_SUCCESS,
  UPDATE_NEWDATA_PROFILE,
  USER_LOGOUT_SUCCESS,
} from "../action/userAction";

const INITIAL_STATE = {
  account: {
    access_token: "",
    email: "",
    image: "",
    refresh_token: "",
    role: "",
    username: "",
  },

  isAuthenticated: false,
};

const useReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN_SUCCESS:
      return {
        ...state,
        account: {
          access_token: action?.payLoad?.DT?.access_token,
          email: action?.payLoad?.DT?.email,
          image: action?.payLoad?.DT?.image,
          refresh_token: action?.payLoad?.DT?.refresh_token,
          role: action?.payLoad?.DT?.role,
          username: action?.payLoad?.DT?.username,
        },

        isAuthenticated: true,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        account: {
          access_token: "",
          email: "",
          image: "",
          refresh_token: "",
          role: "",
          username: "",
        },
        isAuthenticated: false,
      };
    case UPDATE_NEWDATA_PROFILE:
      return {
        ...state,
        account: {
          // giá trị ở sau đè giá trị ở trước
          ...state.account,
          ...action.payLoad,
        },
      };
    default:
      return state;
  }
};
export default useReducer;
