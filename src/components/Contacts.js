import React, { useContext } from 'react';
import ContactsHeader from './ContactsHeader';
import { GlobalContext } from '../context/Provider';

const Contacts = () => {
  const context = useContext(GlobalContext);
  console.log('context', context);
  return (

    <div>
      <ContactsHeader />
      <h1>Contacts</h1>
    </div>
  );
};

export default Contacts;
