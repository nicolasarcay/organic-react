import React from "react";
import { Container, Row } from "react-bootstrap";
import CardProductMedium from "./cards/CardProductMedium";


export default function SliderFullWidth() {
  return (
    <Container>
      <Row className="py-5 px-1">
        <CardProductMedium />
      </Row>
    </Container>
  );
}
