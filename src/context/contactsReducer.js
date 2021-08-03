import {
  CONTACTS_ERROR, CONTACTS_LOADING, CONTACTS_SUCCESS, LOGOUT_USER,
} from './actionTypes';
import contactsInitialState from './contactsInitialState';

const contacts = (state, { type, payload }) => {
  switch (type) {
    case CONTACTS_LOADING: {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: true,
        },

      };
    }
    case CONTACTS_SUCCESS: {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: payload,
        },
      };
    }
    case CONTACTS_ERROR: {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          error: payload,
        },
      };
    }

    case LOGOUT_USER: {
      return {
        ...state,
        contactsInitialState,
      };
    }

    default:
      return state;
  }
};

export default contacts;
