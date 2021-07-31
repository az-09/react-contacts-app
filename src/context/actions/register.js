import axiosInstance from '../../helpers/axios';
import { REGISTER_LOADING, REGISTER_SUCCESS, REGISTER_ERROR } from '../actionTypes';

const register = ({
  // eslint-disable-next-line camelcase
  email, password, username, lastname: last_name, firstname: first_name,

}) => (authDispatch) => {
  authDispatch({
    type: REGISTER_LOADING,
  });

  axiosInstance.post('/auth/register', {
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
