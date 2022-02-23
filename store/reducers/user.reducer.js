import { GET_DATA, GET_DETAIL,CLEAR_DATA } from "../actions/user.action";

const initialState = {
  payload: [],
};

export const userReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case GET_DATA:
      return { ...state, payload: action.payload };
    case GET_DETAIL:
      return { ...state, get_user: action.payload };
    case CLEAR_DATA:
      return initialState;
    default:
      return state;
  }
};
