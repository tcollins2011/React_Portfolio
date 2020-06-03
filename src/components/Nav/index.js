import React from "react";
import {Navbar, Nav} from 'react-bootstrap'

function NavBar(){
    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
      </>
    )
}

export default NavBar;