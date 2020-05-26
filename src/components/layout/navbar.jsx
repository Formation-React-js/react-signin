import React from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = ({ currentUser, setCurrentUser }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand>React-Signin</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Nav>
        <Nav>
          {currentUser === null ?
            <Link to="/login">
              <Button variant="primary">
                Se connecter
              </Button>
            </Link>
          :
            <>
              <Link className="nav-link" to="/profile">
                {currentUser.username}
              </Link>
              <Button variant="secondary" onClick={() => setCurrentUser(null)}>
                Se déconnecter
              </Button>
            </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
