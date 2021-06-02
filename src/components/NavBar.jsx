import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import logo from "../img/logo-ecommerce.png";
import CartWidget from "./widget/CartWidget";

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
            <Navbar.Brand href="#home" className="pl-lg-5">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Navbar.Brand>
          </Col>
          <Col xs={4} className="d-flex justify-content-end align-items-center">
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="border-0 mr-2"
            />
            <Nav className="icon-cart">
              <CartWidget></CartWidget>
            </Nav>
          </Col>
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
