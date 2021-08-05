import axiosInstance from '../helpers/axiosInstance';
import { REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_ERROR } from '../context/actionTypes';

const register = ({
  // eslint-disable-next-line camelcase
  email, password, username, lastName: last_name, firstName: first_name,

}) => (authDispatch) => {
  authDispatch({
    type: REGISTER_LOADING,
  });

  axiosInstance().post('/auth/register', {
    email, password, username, last_name, first_name,
  })
    .then((res) => {
      authDispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      authDispatch({
        type: REGISTER_ERROR,
        payload: err.response ? err.response.data : 'Could not connect',
      });
    });
};

export default register;
