import React from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';

const CustomNavbar = ({ currentUser, setCurrentUser }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Signin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        <Nav>
          {currentUser === null ?
            <Button variant="primary">
              Se connecter
            </Button>
          :
            <>
              <Nav.Link>{currentUser.username}</Nav.Link>
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
