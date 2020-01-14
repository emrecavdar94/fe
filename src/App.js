import React from 'react';
import './App.css';
import "../src/assets/vendor/nucleo/css/nucleo.css";
import "../src/assets/vendor/font-awesome/css/font-awesome.min.css";
import "../src/assets/scss/argon-design-system-react.scss";

import Login from './pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './pages/Index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={props => <Login {...props} />} />
        {/* <Route
          path="/landing-page"
          exact
          render={props => <Lan {...props} />}
        /> */}
        <Route path="/index" exact render={props => <Index {...props} />} />
        {/* <Route
          path="/profile-page"
          exact
          render={props => <Profile {...props} />}
        />
        <Route
          path="/register-page"
          exact
          render={props => <Register {...props} />}
        />
        <Redirect to="/" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
