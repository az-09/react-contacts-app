import { SEARCH_CONTACTS } from '../context/actionTypes';

export default (searchText) => (contactsDispatch) => {
  contactsDispatch({
    type: SEARCH_CONTACTS,
    payload: searchText,
  });
};
