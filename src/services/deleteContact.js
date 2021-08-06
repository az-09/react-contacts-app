import {
  DELETE_CONTACT_ERROR, DELETE_CONTACT_LOADING, DELETE_CONTACT_SUCCESS,
} from '../context/actionTypes';
import axiosInstance from '../helpers/axiosInstance';

export default (id) => (contactDispatch) => {
  contactDispatch({
    type: DELETE_CONTACT_LOADING,
  });

  axiosInstance()
    .delete(`/contacts/${id}`)
    .then(() => {
      contactDispatch({
        type: DELETE_CONTACT_SUCCESS,
        payload: id,
      });
    })
    .catch((err) => {
      contactDispatch({
        type: DELETE_CONTACT_ERROR,
        payload: err.response ? err.response.data : 'Could not connect',
      });
    });
};
