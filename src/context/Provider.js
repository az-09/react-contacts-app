/* eslint-disable react/prop-types */
import React, { createContext, useReducer } from 'react';
import authInitialState from './authInitialState';
import authReducer from './authReducer';

import contactsInitialState from './contactsInitialState';
import contactsReducer from './contactsReducer';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(contactsReducer, contactsInitialState);

  return (
    <GlobalContext.Provider value={{

      authState,
      authDispatch,
      contactsState,
      contactsDispatch,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
