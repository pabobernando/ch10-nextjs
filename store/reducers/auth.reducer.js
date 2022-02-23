import { AUTH_LOGIN, AUTH_LOGOUT,INIT } from "../actions/auth.action";

const initialState = {
  isAuthenticated: false,
  loading:true
};

export const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case INIT:
        return{...state}
    case AUTH_LOGIN:
      return { isAuthenticated: true, loading:true, payload: action.payload };
    case AUTH_LOGOUT:
      return initialState

    default:
      return state;
  }
};
