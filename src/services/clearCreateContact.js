import { CLEAR_ADD_CONTACT } from '../context/actionTypes';

export default () => (contactsDispatch) => {
  contactsDispatch({
    type: CLEAR_ADD_CONTACT,
  });
};
