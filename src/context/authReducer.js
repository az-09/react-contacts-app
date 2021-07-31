import {
  REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR,
} from './actionTypes';

const authReducer = (state, action) => {
  // console.log('action', action);
  switch (action.type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return {
        ...state,
        error: false,
        loading: true,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case REGISTER_ERROR:
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
