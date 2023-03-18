import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import baakelogo from '../images/baakelogo.png'

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={baakelogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            E-commerce React App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header