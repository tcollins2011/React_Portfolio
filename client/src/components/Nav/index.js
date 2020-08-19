import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

function NavBar() {
  return (
    <>
      <Navbar>
        <Navbar.Brand>
          <Link to="/home">Home</Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/portfolio">Portfolio</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
