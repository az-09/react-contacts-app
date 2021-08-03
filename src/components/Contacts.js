import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  List, Placeholder, Image, Container,
} from 'semantic-ui-react';
import { GlobalContext } from '../context/Provider';
import getContacts from '../services/getContacts';
import ContactsHeader from './ContactsHeader';

const ContactList = (contactsState) => {
  const {
    state: {
      contacts: { loading, data },
    },
  } = contactsState;

  return (
    <>
      <ContactsHeader />
      <Container>
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
        <List>
          {data.length && data.map((contact) => (
            <List.Item key={contact.id}>
              <List.Content floated="right">
                <span>
                  {contact.phone_number}
                </span>
              </List.Content>
              <List.Content style={{ display: 'flex', alignItems: 'center' }}>
                <Image circular style={{ width: 45, height: 45 }} src={contact.picture_url} />
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
  // eslint-disable-next-line no-console
  console.log('contacts.history', history);

  useEffect(() => {
    getContacts(history)(contactsDispatch);
  }, []);
  return (
    <ContactList state={contactsState} />
  );
};

export default Contacts;
