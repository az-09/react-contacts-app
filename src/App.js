import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import { GlobalProvider } from './context/Provider';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.title}
              path={route.path}
              exact
              render={(props) => <route.component {...props} />}
            />
          ))}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
