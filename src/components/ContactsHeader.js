import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Button, Icon, Image, Menu,
} from 'semantic-ui-react';
import logo from '../assets/images/logo.svg';

const ContactsHeader = () => {
  const { pathname } = useLocation();

  // console.log("location", pathname)
  return (

    <Menu secondary pointing>
      <Image src={logo} width={60} />
      <Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>ME Contacts</Menu.Item>
      {pathname === '/' && (
      <Menu.Item position="right">
        <Button as={Link} to="/contacts/create" primary icon basic>
          <Icon name="add" />
          Create Contact
        </Button>
      </Menu.Item>
      )}

      {pathname === '/' && (
      <Menu.Item>
        {' '}
        <Button icon basic color="red">
          <Icon name="log out" />
          Logout
        </Button>
      </Menu.Item>
      )}

    </Menu>
  );
};

export default ContactsHeader;
