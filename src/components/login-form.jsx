import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { fakeLogin } from '../utils';

const LoginForm = ({ setCurrentUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
