import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginPage } from './pages';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <LoginPage {...{ currentUser, setCurrentUser }} />
  );
}

export default App;
