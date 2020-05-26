import React from 'react';
import { Redirect } from 'react-router-dom';
import { Layout } from '../components';
import { ListGroup } from 'react-bootstrap';

const ProfilePage = ({ currentUser, setCurrentUser }) => {
  if (currentUser === null) {
    return <Redirect to="/" />;
  }

  return (
    <Layout
      {...{ currentUser, setCurrentUser }}
    >
      <h1>{currentUser.name}</h1>
      <ListGroup>
        <ListGroup.Item>Nom d'utilisateur: {currentUser.username}</ListGroup.Item>
        <ListGroup.Item>Mot de passe: {currentUser.password}</ListGroup.Item>
      </ListGroup>
    </Layout>
  );
}

export default ProfilePage;
