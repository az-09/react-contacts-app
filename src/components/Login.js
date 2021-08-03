import React from 'react';

import {
  Button, Form, Grid, Header, Message, Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import useLoginForm from '../hooks/useLoginForm';
import ContactsHeader from './ContactsHeader';

const Login = () => {
  const {
    form, onChange, loginFormValid, onSubmit, loading, error,
  } = useLoginForm();
  return (

    <>
      <ContactsHeader />
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <Header>Login</Header>
          <Segment>
            <Form>
              {error && <Message content={error?.detail} negative />}
              <Form.Field>
                <Form.Input
                  value={form.username || ''}
                  onChange={onChange}
                  name="username"
                  placeholder="Username"
                  label="Username"

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

                />
              </Form.Field>

              <Button onClick={onSubmit} disabled={loginFormValid || loading} fluid loading={loading} primary type="submit">Submit</Button>
              <Segment>
                Need an account
                {' '}
                <Link to="/auth/register">Register</Link>
              </Segment>
            </Form>
          </Segment>

        </Grid.Column>
      </Grid>

    </>
  );
};
export default Login;
