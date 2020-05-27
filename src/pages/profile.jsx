import React from 'react';
import { Redirect } from 'react-router-dom';
import { Layout } from '../components';
import { ListGroup } from 'react-bootstrap';
import { withCurrentUser } from '../state/current-user';

const ProfilePage = ({ currentUser }) => {
  if (currentUser === null) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <h1>{currentUser.name}</h1>
      <ListGroup>
        <ListGroup.Item>Nom d'utilisateur: {currentUser.username}</ListGroup.Item>
        <ListGroup.Item>Mot de passe: {currentUser.password}</ListGroup.Item>
      </ListGroup>
    </Layout>
  );
}

export default withCurrentUser(ProfilePage);
