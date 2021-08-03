import React from 'react';

import {
  Button, Form, Grid, Header, Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useRegisterForm';
import ContactsHeader from './ContactsHeader';

const Register = () => {
  const {
    form, onChange, registerFormValid, onSubmit, loading, fieldErrors,
  } = useForm();
  return (

    <>
      <ContactsHeader />
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <Header>Signup Here</Header>
          <Segment>
            <Form>
              <Form.Field>
                <Form.Input
                  value={form.username || ''}
                  onChange={onChange}
                  name="username"
                  placeholder="Username"
                  label="Username"
                  error={fieldErrors.username && {
                    content: fieldErrors.username, pointing: 'below',
                  }}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.firstname || ''}
                  onChange={onChange}
                  name="firstname"
                  placeholder="First Name"
                  label="First Name"
                  error={fieldErrors.firstname && {
                    content: fieldErrors.firstname, pointing: 'below',
                  }}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.lastname || ''}
                  onChange={onChange}
                  name="lastname"
                  placeholder="Last Name"
                  label="Last Name"
                  error={fieldErrors.lastname && {
                    content: fieldErrors.lastname, pointing: 'below',
                  }}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.email || ''}
                  onChange={onChange}
                  name="email"
                  type="email"
                  placeholder="Email"
                  label="Email"
                  error={fieldErrors.email && {
                    content: fieldErrors.email, pointing: 'below',
                  }}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.password || ''}
                  onChange={onChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                  label="Password"
                  error={fieldErrors.password && {
                    content: fieldErrors.password, pointing: 'below',
                  }}
                />
              </Form.Field>

              <Button onClick={onSubmit} disabled={registerFormValid || loading} fluid loading={loading} primary type="submit">Submit</Button>
              <Segment>
                Already have an account?
                {' '}

                <Link to="/auth/login">Login</Link>
              </Segment>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>

    </>
  );
};
export default Register;
