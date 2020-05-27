import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { fakeLogin } from '../utils';
import { Redirect } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { currentUserState } from '../state';

const LoginForm = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (currentUser !== null) {
    return <Redirect to="/" />;
  } 

  return (
    <Form
      onSubmit={ (event) => {
        event.preventDefault();
        setErrorMessage('')
        fakeLogin(username, password)
        .then(response => setCurrentUser(response))
        .catch(error => setErrorMessage("Identifiants invalides!"));
      }}
    >
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form.Group>
        <Form.Label>Nom d'utilisateur</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      <Button type="submit">
        Se connecter
      </Button>
    </Form>
  );
}

export default LoginForm;
