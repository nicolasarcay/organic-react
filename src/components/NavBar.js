import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import logo from "../img/logo-ecommerce.png";

export default function NavBar() {
  return (
    <div className="fixed-top">
      <Container>
        <Navbar
          collapseOnSelect
          expand="null"
          bg="transparent"
          variant="light"
          className="navbar-w-100 py-4"
        >
          <Navbar.Brand href="#home">
            <img src={logo} fluid alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="border-0"
          />
          <Navbar.Collapse id="responsive-navbar-nav" className="bg-secondary">
            <Nav>
              <Container className="menu_collapse">
                <Row className="flex-column justify-content-center h-100">
                  <Nav.Link href="#products" className="h1">
                    Productos
                  </Nav.Link>
                  <Nav.Link href="#aboutus" className="h1">
                    Quienes Somos
                  </Nav.Link>
                  <Nav.Link href="#sales" className="h1">
                    Ofertas
                  </Nav.Link>
                </Row>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
