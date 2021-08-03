import './App.css';
import {
  BrowserRouter as Router, Switch, Route, useHistory,
} from 'react-router-dom';
import routes from './routes';
import { GlobalProvider } from './context/Provider';
import isAuthenticated from './utils/isAuthenticated';

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
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          {routes.map((route) => <RenderRoute {...route} key={route.title} />)}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
