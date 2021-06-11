import React from "react";
import { Container, Row } from "react-bootstrap";
import CardProductMedium from "./cards/CardProductMedium";
import CardMercadolibre from './cards/CardMercadolibre'


export default function SliderFullWidth() {
  return (
    <Container>
      <Row className="py-5 px-1">
        <CardProductMedium />
        <CardMercadolibre />
      </Row>
    </Container>
  );
}
