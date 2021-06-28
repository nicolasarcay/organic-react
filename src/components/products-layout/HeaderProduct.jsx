import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CounterCard from "../counters/CounterCard";

function HeaderProduct(props) {

  return (
    <div>
      <div className="position-relative product">
        <img className="img-fluid" src={props.bg} alt={props.producto} />
        <Container className="position-absolute product-texts">
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="text-primary cursive font-weight-bold">
                {props.producto}
              </h1>
              <h3>{props.descripcion}</h3>
              <p className="d-flex flex-column">
                <span className="font-weight-bold text-primary h4 mb-0">
                  $ {props.precio}
                </span>
                <small className="text-muted">{props.leyenda}</small>
              </p>
              <div className="d-flex justify-content-start m-0">
                <CounterCard allData={props}/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HeaderProduct;
