import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import IndexPage from "./pages/index/page";
import LoginPage from "./pages/login/page";

import store from "./store";

const Secure = (props) => {
  if (!!store.user) {
    return <props.page {...props} />;
  }

  return <Redirect to="/login" />;
};

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>

      <Switch>
        <Route exact path="/" render={() => <Secure page={IndexPage} />} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
