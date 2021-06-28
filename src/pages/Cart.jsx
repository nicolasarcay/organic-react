import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardContainerCart from "../components/CardContainerCart";

function Cart() {
  return (
    <>
      <Container fluid className="bg-cart">
        <Row className="align-items-center h-100">
          <Col xs lg={4} md={6} className="ml-auto">
            <div className="container-main-all-texts">
              <h1 className="font-weight-bold cursive text-primary">
                Tu Compra
              </h1>
              <p>Estamos en el ultimo paso de tu compra saludable.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <CardContainerCart />
    </>
  );
}

export default Cart;
