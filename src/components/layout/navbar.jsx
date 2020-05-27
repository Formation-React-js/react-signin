import React from 'react';
import { Navbar, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../../state';

const CustomNavbar = ({ currentUser }) => {
  const resetCurrentUser = () => store.dispatch({
    type: 'RESET_CURRENTUSER',
  });

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
          <Link className="nav-link" to="/articles">
            Articles
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
              <Button variant="secondary" onClick={() => resetCurrentUser()}>
                Se déconnecter
              </Button>
            </>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapStateToProps = (state) => ({ currentUser: state.currentUser });

export default connect(mapStateToProps)(CustomNavbar);
