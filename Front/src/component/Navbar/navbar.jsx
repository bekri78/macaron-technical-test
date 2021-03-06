import React from "react";
import "./navbar.css";
import Macaron from './img/macaron.png';
import { Nav, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export default function NavBar() {
  return (
    <Navbar
      className="nav"
      
      sticky="top" 
      expand="sm"
      bg="black"
      variant="dark"
    >
      <Navbar.Brand>
        <img id="logo" src={Macaron} alt="AlphaB" />
      </Navbar.Brand>
      <NavbarToggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link className="liens" href="/">
            Accueil
          </Nav.Link>
         
          <Nav.Link className="liens" href="#map">
            Map
          </Nav.Link>
          <Nav.Link className="liens" href="#contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
