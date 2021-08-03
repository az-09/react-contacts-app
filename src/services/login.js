import axiosInstance from '../helpers/axiosInstance';
import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from '../context/actionTypes';

const login = ({ username, password }) => (authDispatch) => {
  authDispatch({
    type: LOGIN_LOADING,
  });

  axiosInstance().post('/auth/login', { username, password })
    .then((res) => {
      localStorage.token = res.data.token;
      authDispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      authDispatch({
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data : 'Could not connect',
      });
    });
};

export default login;
