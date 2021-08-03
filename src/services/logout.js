import { LOGOUT_USER } from '../context/actionTypes';

export default (history) => (contactsDispatch) => {
  localStorage.removeItem('token');

  contactsDispatch({
    type: LOGOUT_USER,
  });
  history.push('/auth/login');
};
