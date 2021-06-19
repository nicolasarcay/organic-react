import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CounterCard from "../counters/CounterCard";
import bgFrutillas from "../../img/frutillas-bg.jpg";

function HeaderProduct() {

  return (
    <div>
      <div className="position-relative product">
        <img clasName="img-fluid" src={bgFrutillas} alt="frutillas" />
        <Container className="position-absolute product-texts">
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="text-primary cursive font-weight-bold">
                Frutillas
              </h1>
              <h3>Descripcion Corta</h3>
              <p className="d-flex flex-column">
                <span className="font-weight-bold text-primary h4 mb-0">
                  $350
                </span>
                <small className="text-muted">Precio por Kilo</small>
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
