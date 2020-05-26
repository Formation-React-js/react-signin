import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginPage, HomePage } from './pages';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <HomePage {...{ ...props, currentUser, setCurrentUser }} />} />
        <Route exact path="/login" render={props => <LoginPage {...{ ...props, currentUser, setCurrentUser }} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
