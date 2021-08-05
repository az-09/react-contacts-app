import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  List, Placeholder, Container, Message, Header,
} from 'semantic-ui-react';
import { GlobalContext } from '../context/Provider';
import getContacts from '../services/getContacts';
import ContactsHeader from './ContactsHeader';
import Favorites from './Favorites';
import ImageThumb from './ImageThumb';

const ContactList = (contactsState) => {
  const {
    state: {
      contacts: {
        loading, data, isSearchActive, foundContacts,
      },
    },
  } = contactsState;

  const currentContacts = isSearchActive ? foundContacts : data;

  return (
    <>
      <ContactsHeader />
      <Container>
        <Header>STARRED</Header>

        <Favorites
          favorites={currentContacts.filter((item) => item.is_favorite)}
          loading={loading}
        />

        <Header>ALL</Header>
        {loading && (
        <>
          {' '}
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        </>
        )}
        {!loading && currentContacts.length === 0 && (
          <Message content="No contacts to show." />
        )}

        <List>
          {currentContacts.length > 0 && currentContacts.length
          && currentContacts.map((contact) => (
            <List.Item key={contact.id}>
              <List.Content floated="right">
                <span>
                  {contact.phone_number}
                </span>
              </List.Content>
              <List.Content style={{ display: 'flex', alignItems: 'center' }}>
                <ImageThumb
                  firstName={contact.first_name}
                  lastName={contact.last_name}
                  src={contact.picture_url}
                />
                {/* <Image circular style={{ width: 45, height: 45 }}
                src={contact.picture_url} /> */}
                <span>
                  {contact.first_name}
                  {' '}
                  {contact.last_name}
                </span>
              </List.Content>

            </List.Item>
          )) }
        </List>

      </Container>
    </>
  );
};

const Contacts = () => {
  const { contactsDispatch, contactsState } = useContext(GlobalContext);

  const history = useHistory();

  const { contacts: { data } } = contactsState;

  useEffect(() => {
    if (data.length === 0) { // calls getContacts only when data is null
      getContacts(history)(contactsDispatch);
    }
  }, []);
  return (
    <ContactList state={contactsState} />
  );
};

export default Contacts;
