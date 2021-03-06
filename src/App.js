import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginPage, HomePage, ProfilePage, ArticlesPage } from './pages';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
import store from './state';

const App = () => {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/articles" component={ArticlesPage} />
          </Switch>
        </BrowserRouter>
      </RecoilRoot>
    </Provider>
  );
}

export default App;
