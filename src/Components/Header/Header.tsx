import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import User from "../User";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="mx-5" href="#home">Favorite Movies App</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
          <User />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;