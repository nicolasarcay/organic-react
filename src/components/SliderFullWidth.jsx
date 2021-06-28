import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonPrincipal from "./buttons/ButtonPrincipal";


export default function SliderFullWidth() {
  return (
    <Container fluid className="container-main">
      <Row className="px-lg-5 mx-lg-5 align-items-center h-100 container-main-all">
        <Col xs lg={4} md={6}>
          <div className="container-main-all-texts">
            <h2 className="cursive text-primary font-weight-bold h1">
              Compra Orgánico
            </h2>
            <h1 className="text-uppercase font-weight-bold">
              Productos del Campo
              <br />a tu casa
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor. Lorem
            </p>
          </div>
          <div className="container-main-all-button">
            <ButtonPrincipal callToAction="Comprar Ahora" link="/Shop"/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
