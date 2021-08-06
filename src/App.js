import './App.css';
import {
  BrowserRouter as Router, Switch, Route, useHistory,
} from 'react-router-dom';
import React, { Suspense, useState } from 'react';

import routes from './routes';
import { GlobalProvider } from './context/Provider';
import isAuthenticated from './utils/isAuthenticated';
import UserLeaveConfirmation from './components/UserLeaveConfirmation';

// eslint-disable-next-line react/prop-types
const RenderRoute = (route) => {
  const {
    needsAuth, path, component, title,
  } = route;

  document.title = title || 'ME Contacts';
  const history = useHistory();

  if (needsAuth && !isAuthenticated()) {
    history.push('/auth/login');
  }

  return (
    <Route
      path={path}
      exact
      component={component}
    />

  );
};

function App() {
  const [confirmOpen, setConfirmOpen] = useState(true);

  return (
    <GlobalProvider>
      <Router getUserConfirmation={(message, callback) => UserLeaveConfirmation(
        message,
        callback,
        confirmOpen,
        setConfirmOpen,
      )}
      >
        <Suspense fallback={<p>Loading</p>}>

          <Switch>
            {routes.map((route) => <RenderRoute {...route} key={route.title} />)}
          </Switch>
        </Suspense>
      </Router>
    </GlobalProvider>
  );
}

export default App;
