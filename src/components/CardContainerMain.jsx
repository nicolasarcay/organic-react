import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardProductMedium from "./cards/CardProductMedium"

export default function SliderFullWidth() {
  return (
    
    <Container>
            <Row>
                <Col md={4} xs={12}>
                <CardProductMedium />
                </Col>
                <Col md={4} xs={12}>
                <CardProductMedium />
                </Col>
                <Col md={4} xs={12}>
                <CardProductMedium />
                </Col>
            </Row>
        </Container>
  );
}



