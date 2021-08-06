import {
  ADD_CONTACT_ERROR,
  ADD_CONTACT_LOADING,
  ADD_CONTACT_SUCCESS,
  CLEAR_ADD_CONTACT,
  CONTACTS_ERROR,
  CONTACTS_LOADING,
  CONTACTS_SUCCESS,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  LOGOUT_USER,
  SEARCH_CONTACTS,
} from './actionTypes';
import contactsInitialState from './contactsInitialState';

const contactsReducer = (state, { type, payload }) => {
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

    case SEARCH_CONTACTS: {
      const searchValue = payload?.toLowerCase();
      return {
        contacts: {
          ...state.contacts,
          loading: false,
          isSearchActive: payload.length > 0 || false,
          // eslint-disable-next-line max-len
          foundContacts: state.contacts.data.filter((contact) => {
            try { // to prevent special characters which result in breaking app
              return (
                contact.first_name.toLowerCase().search(searchValue) !== -1
              || contact.last_name.toLowerCase().search(searchValue) !== -1
              || contact.phone_number.toLowerCase().search(searchValue) !== -1);
            } catch (error) {
              return [];
            }
          }),
        },
      };
    }

    case DELETE_CONTACT_SUCCESS: {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: state.contacts.data.filter((contact) => contact.id !== payload),
        },
      };
    }

    case DELETE_CONTACT_LOADING: {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: state.contacts.data.map((contact) => {
            if (contact.id === payload) {
              return { ...contact, deleting: true };
            }
            return contact;
          }),
        },
      };
    }

    default:
      return state;
  }
};

export default contactsReducer;
