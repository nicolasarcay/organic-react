import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CounterCard from "../counters/CounterCard";

function HeaderProduct({bgProduct, producto, precio, leyenda, descripcion}) {

  return (
    <div>
      <div className="position-relative product">
        <img clasName="img-fluid" src={bgProduct} alt="frutillas" />
        <Container className="position-absolute product-texts">
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="text-primary cursive font-weight-bold">
                {producto}
              </h1>
              <h3>{descripcion}</h3>
              <p className="d-flex flex-column">
                <span className="font-weight-bold text-primary h4 mb-0">
                  {precio}
                </span>
                <small className="text-muted">{leyenda}</small>
              </p>
              <div className="d-flex justify-content-start m-0">
                <CounterCard />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HeaderProduct;
