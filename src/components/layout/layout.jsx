import React from 'react';
import Navbar from './navbar';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Container>
        <main>
          {children}
        </main>
        <footer className="mt-4">
          Copyright &copy; 2020 formation React.js
        </footer>
      </Container>
    </>
  )
}

export default Layout;
