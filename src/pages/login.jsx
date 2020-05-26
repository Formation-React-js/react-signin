import React from 'react';
import { Layout, LoginForm } from '../components';

const LoginPage = ({ currentUser, setCurrentUser }) => {
  return (
    <Layout
      {...{ currentUser, setCurrentUser }}
    >
      <LoginForm
        {...{ currentUser, setCurrentUser }}
      />
    </Layout>
  )
}

export default LoginPage;
