import React from 'react';
import { Layout, LoginForm } from '../components';

const LoginPage = ({ currentUser }) => {
  return (
    <Layout
      currentUser={currentUser}
    >
      <LoginForm />
    </Layout>
  )
}

export default LoginPage;
