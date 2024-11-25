import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/react-b.svg';
import Switch from '../components/Switch';

const Naviguation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      {/* Logo à gauche */}
      <Navbar.Brand href="#home">
            <img
              alt=""
              src= {logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
 <Switch/>
          </Navbar.Brand>
        <div><Switch/><div/>
      {/* Bouton pour les mobiles */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        {/* Liens alignés à droite */}
        <Nav className="ms-auto" style={{position:"relative",left:"7vw"}}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Naviguation