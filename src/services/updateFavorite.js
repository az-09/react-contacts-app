/* eslint-disable camelcase */
import { UPDATE_FAVORITE_ERROR, UPDATE_FAVORITE_LOADING, UPDATE_FAVORITE_SUCCESS } from '../context/actionTypes';
import axiosInstance from '../helpers/axiosInstance';

export default (id, is_favorite) => (contactDispatch) => {
  contactDispatch({
    type: UPDATE_FAVORITE_LOADING,
    payload: id,
  });

  axiosInstance()
    .patch(`/contacts/${id}`, { is_favorite })
    .then((res) => {
      contactDispatch({
        type: UPDATE_FAVORITE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      contactDispatch({
        type: UPDATE_FAVORITE_ERROR,
        payload: err.response ? err.response.data : 'Could not connect',
      });
    });
};
