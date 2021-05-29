import React from "react";
import frutas from "../img/img2.jpg";
import { Container, Row, Col } from "react-bootstrap";

export default function SliderFullWidth() {
  return (
    // incio contenedor principal full width
    <Container fluid className="container-main">
        <Row className="px-lg-5 mx-lg-5 align-items-center h-100">
          <Col xs lg={4} md={6}>
            <div className="container-main-texts">
              <h2 className="cursive text-primary font-weight-bold h1">Compra Orgánico</h2>
              <h1 className="text-uppercase font-weight-bold">Productos del Campo<br></br>a tu casa</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem</p>
            </div>
            <div className="container-main-button">
              <a href="#" className="btn btn-primary container-main-button-fresh font-weight-bold">Comprar Ahora</a>
            </div>
          </Col>
        </Row>
    </Container>
  );
}
