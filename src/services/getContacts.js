import axiosInstance from '../helpers/axiosInstance';
import { CONTACTS_ERROR, CONTACTS_LOADING, CONTACTS_SUCCESS } from '../context/actionTypes';

export default (history) => (contactsDispatch) => {
  contactsDispatch({
    type: CONTACTS_LOADING,
  });

  axiosInstance(history).get('/contacts/')
    .then((res) => {
      contactsDispatch({
        type: CONTACTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      contactsDispatch({
        type: CONTACTS_ERROR,
        payload: err.response ? err.response.data : 'Could not connect',
      });
    });
};
