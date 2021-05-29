import React from "react";
import {Navbar, Nav, Container, Row} from 'react-bootstrap';
import logo from "../img/logo-ecommerce.png";

export default function NavBar() {
  return (
    <div className="fixed-top container-navbar">
      <Container fluid className="px-lg-5 px-md-3">
        <Navbar
          collapseOnSelect
          expand="null"
          bg="transparent"
          variant="light"
          className="navbar-w-100 py-2 px-lg-5 px-md-3"
        >
          <Navbar.Brand href="#home" className="pl-5">
            <img src={logo} className="img-fluid" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="border-0 mr-5 text-white"
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
