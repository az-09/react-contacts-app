import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
  Button, Icon, Image, Input, Menu,
} from 'semantic-ui-react';
import logo from '../assets/images/logo.svg';
import { GlobalContext } from '../context/Provider';
import logout from '../services/logout';
import searchContacts from '../services/searchContacts';
import isAuthenticated from '../utils/isAuthenticated';

const ContactsHeader = () => {
  const { pathname } = useLocation();
  const { contactsDispatch } = useContext(GlobalContext);
  const history = useHistory();

  const handleUserLogout = () => {
    logout(history)(contactsDispatch);
  };

  const onChange = (e, { value }) => {
    const searchText = value.trim().replace(/' '/g, '');

    searchContacts(searchText)(contactsDispatch);
  };

  // console.log("location", pathname)
  return (

    <Menu secondary pointing>
      <Image src={logo} width={60} />
      <Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>ME Contacts</Menu.Item>
      {isAuthenticated() && (

      <Menu.Item position="right">
        <Input style={{ width: 300 }} placeholder="Search Contacts" onChange={onChange} />
      </Menu.Item>

      )}

      {pathname === '/' && (
      <Menu.Item>
        <Button as={Link} to="/contacts/create" primary icon basic>
          <Icon name="add" />
          Create Contact
        </Button>
      </Menu.Item>
      )}

      {isAuthenticated() && (
      <Menu.Item position="right">
        {' '}
        <Button onClick={handleUserLogout} icon basic color="red">
          <Icon name="log out" />
          Logout
        </Button>
      </Menu.Item>
      )}

    </Menu>
  );
};

export default ContactsHeader;
