import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginPage, HomePage, ProfilePage, ArticlesPage } from './pages';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <HomePage {...{ ...props, currentUser, setCurrentUser }} />} />
        <Route exact path="/login" render={props => <LoginPage {...{ ...props, currentUser, setCurrentUser }} />} />
        <Route exact path="/profile" render={props => <ProfilePage {...{ ...props, currentUser, setCurrentUser }} />} />
        <Route exact path="/articles" render={props => <ArticlesPage {...{ ...props, currentUser, setCurrentUser }} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
