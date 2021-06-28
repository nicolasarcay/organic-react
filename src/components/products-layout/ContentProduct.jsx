import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductBenefit from "./PorductBenefit";
import ProductNutricion from "./ProductNutricion";

function ContentProduct(props) {
  const [tab, setTab] = useState(true);


  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <img
              className="img-fluid"
              src={props.img}
              alt={props.title}
            />
          </Col>
          <Col md={8} className="pl-md-5 pl-lg-2">
            <Row className="mb-3 justify-content-center justify-content-md-start">
              <Button
                id="benefit"
                variant="primary"
                className="rounded-pill mr-3"
                onClick={()=>setTab(true)}
              >
                Beneficios
              </Button>
              <Button
                id="nutricion"
                variant="primary"
                className="rounded-pill"
                onClick={()=>setTab(false)}
              >
                Infromación Nutricional
              </Button>
            </Row>
            <Row className="justify-content-center justify-content-md-start">
              <div className={tab ? "d-block" : "d-none"}>
                <ProductBenefit />
              </div>
              <div className={!tab ? "d-block" : "d-none"}>
                <ProductNutricion />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContentProduct;
