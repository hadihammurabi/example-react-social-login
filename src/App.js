import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import IndexPage from './pages/index';
import LoginPage from './pages/login';

import store from './store';

const secure = (Page) => {
  return (props) => {
    if (store.user?.accessToken) {
      return <Page {...props} />;
    }

    return <Redirect to="/login" />;
  };
};

function App() {
  return (
    <Router>

      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>

      <Switch>
        <Route exact path="/" render={secure(IndexPage)} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
