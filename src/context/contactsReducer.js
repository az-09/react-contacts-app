import {
  ADD_CONTACT_ERROR,
  ADD_CONTACT_LOADING,
  ADD_CONTACT_SUCCESS,
  CLEAR_ADD_CONTACT,
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

    case ADD_CONTACT_LOADING: {
      return {
        ...state,
        addContact: {
          ...state.addContact,
          error: null,
          loading: true,
        },
      };
    }

    case ADD_CONTACT_ERROR: {
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          data: payload,
        },
      };
    }

    case ADD_CONTACT_SUCCESS: {
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          data: payload,
        },
        contacts: {
          ...state.contacts,
          loading: false,
          data: [payload, ...state.contacts.data],
        },
      };
    }

    case CLEAR_ADD_CONTACT: {
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          data: null,
        },
      };
    }

    default:
      return state;
  }
};

export default contacts;
