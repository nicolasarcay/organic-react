import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductBenefit from "./PorductBenefit";
import ProductNutricion from "./ProductNutricion";
import { Link } from "react-router-dom";

function ContentProduct() {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <img
              className="img-fluid"
              src="http://nicolasa26.sg-host.com/wp-content/uploads/2021/06/frutillas.jpg"
              alt="Frutillas"
            />
          </Col>
          <Col md={8} className="pl-md-5 pl-lg-2">
            <Row className="mb-3 justify-content-center justify-content-md-start">
              <Link to="/ProductDetail/Benefit">
                <Button variant="primary" className="rounded-pill mr-3">
                  Beneficios
                </Button>
              </Link>
              <Link to="/ProductDetail/Nutricion">
                <Button variant="primary" className="rounded-pill">
                  Infromación Nutricional
                </Button>
              </Link>
            </Row>
            <Row className="justify-content-center justify-content-md-start">
              <Router>
                <Switch>
                  <Route
                    path="/ProductDetail/Benefit"
                    component={ProductBenefit}
                  ></Route>
                  <Route
                    path="/ProductDetail/Nutricion"
                    component={ProductNutricion}
                  ></Route>
                </Switch>
              </Router>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContentProduct;
