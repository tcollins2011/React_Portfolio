import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./index.css";

function NavBar() {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
