/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import axiosInstance from '../helpers/axiosInstance';
import {
  ADD_CONTACT_LOADING,
  ADD_CONTACT_ERROR, ADD_CONTACT_SUCCESS,
} from '../context/actionTypes';
import storage from '../helpers/firebase';

export default ({
  lastName: last_name,
  firstName: first_name,
  phoneNumber: phone_number,
  countryCode: country_code,
  pictureURL: picture_url,
  isfavorite: is_favorite,
}) => (contactsDispatch) => {
  contactsDispatch({
    type: ADD_CONTACT_LOADING,
  });

  const saveToBackend = (url = null) => {
    axiosInstance().post('/contacts/', {
      last_name, first_name, phone_number, country_code, picture_url: url, is_favorite,
    })
      .then((res) => {
        contactsDispatch({
          type: ADD_CONTACT_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        contactsDispatch({
          type: ADD_CONTACT_ERROR,
          payload: err.response ? err.response.data : 'Could not connect',
        });
      });
  };

  if (picture_url) { // if picture_url exists needs to upload to firebase first
    storage
      .ref(`contact_image/${picture_url.name}`)
      .put(picture_url)
      .on('state_changed',
      // must add snapshot and error, if not creating 3 contacts
        (snapshot) => {}, // if not, keep loading wheel
        async (error) => {}, /// if not, keep loading wheel
        async () => {
          const url = await storage
            .ref('contact_image')
            .child(picture_url.name)
            .getDownloadURL();
          saveToBackend(url);
        });
  } else {
    saveToBackend();
  }
};
