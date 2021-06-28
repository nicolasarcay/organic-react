import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import logo from "../img/logo-ecommerce.png";
import CartWidget from "./widget/CartWidget";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <div
      className={
        navbar
          ? "fixed-top container-navbar active"
          : "fixed-top container-navbar"
      }
    >
      <Container fluid className="px-lg-5 px-md-3">
        <Navbar
          collapseOnSelect
          expand="null"
          bg="transparent"
          variant="light"
          className="navbar-w-100 py-1 px-lg-5 px-md-3"
        >
          <Col xs={8}>
            <IndexLinkContainer to="/">
              <Navbar.Brand className="pl-lg-5">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Navbar.Brand>
            </IndexLinkContainer>
          </Col>
          <Col xs={4} className="d-flex justify-content-end align-items-center">
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="border-0 mr-2"
            />
            <LinkContainer to="/Cart">
              <Nav className="icon-cart">
                <CartWidget></CartWidget>
              </Nav>
            </LinkContainer>
          </Col>
          <Navbar.Collapse id="responsive-navbar-nav" className="bg-secondary">
            <Nav>
              <Container className="menu_collapse">
                <Row className="flex-column justify-content-center h-100">
                  <IndexLinkContainer to="/">
                    <Nav.Link className="h1">Inicio</Nav.Link>
                  </IndexLinkContainer>
                  <LinkContainer to="/About">
                    <Nav.Link className="h1">Quienes Somos</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/Shop">
                    <Nav.Link className="h1">Tienda</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/Sales">
                    <Nav.Link className="h1">Ofertas</Nav.Link>
                  </LinkContainer>
                </Row>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
