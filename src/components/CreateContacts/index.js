/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { Prompt } from 'react-router-dom';
import {
  // eslint-disable-next-line no-unused-vars
  Card, Form, Grid, Header, Button, Segment, Icon, Select, Image,
} from 'semantic-ui-react';
import useCreateContactForm from '../../hooks/useCreateContactForm';
import countries from '../../utils/countries';
import ContactsHeader from '../ContactsHeader';
import './index.css';

const CreateContact = () => {
  // eslint-disable-next-line no-console
  const {

    form,
    onChange,
    createContactFormValid,
    onSubmit,
    loading,
    error,
    formIsHalfFilled,
    onImageChange,
    tempFile,

  } = useCreateContactForm();

  const imagePickRef = useRef(null);

  const chooseImage = () => {
    if (imagePickRef.current) {
      imagePickRef.current.click();
    }
  };

  return (
    <>
      <ContactsHeader />

      <Prompt
        when={formIsHalfFilled}
        message={JSON.stringify({
          header: 'Confirm',
          content: 'You have unsaved changes, are you sure?',
        })}

      />

      <Grid centered>
        <Grid.Column className="form-column">
          <Header>
            Create Contact
          </Header>
          <Card fluid>
            <Card.Content>
              <Form unstackable>

                <input onChange={onImageChange} ref={imagePickRef} type="file" hidden />
                <div className="image-wrapper">
                  {tempFile && <Image src={tempFile} className="contact-picture" />}
                  {!tempFile && (
                  <div className="contact-picture">
                    {/* <span>Choose Picture</span> */}
                    <Image onClick={chooseImage} src="https://react.semantic-ui.com/images/wireframe/square-image.png" size="medium" rounded />
                    {/* <Icon name="pencil" onClick={chooseImage} /> */}
                  </div>
                  )}

                </div>

                <Form.Group widths={2}>
                  <Form.Input label="First name" name="firstName" onChange={onChange} placerholder="First name" />
                  <Form.Input label="Last name" name="lastName" onChange={onChange} placerholder="Last name" />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input label="Country" name="countryCode" onChange={onChange} placerholder="Country" control={Select} options={countries} />
                  <Form.Input label="Phone Number" name="phoneNumber" onChange={onChange} placerholder="Phone Number" />
                </Form.Group>
                <Form.Checkbox name="isfavorite" onChange={(e, data) => { onChange(e, { name: 'isfavorite', value: data.checked }); }} label="Add to favorite" />
                <Button loading={loading} disabled={createContactFormValid || loading} type="submit" primary onClick={onSubmit}>Submit</Button>

              </Form>
            </Card.Content>

          </Card>

        </Grid.Column>
      </Grid>
    </>

  );
};

export default CreateContact;
