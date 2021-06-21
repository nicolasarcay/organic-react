import React from "react";
import SliderFullWidth from "../components/SliderFullWidth";
import CardContainerProduct from "../components/CardContainerProduct";
import CardContainerMain from "../components/CardContainerMain";
import { Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <SliderFullWidth />
      <CardContainerMain />
      <Container>
        <Row className="py-5 px-1">
          <CardContainerProduct />
        </Row>
      </Container>
    </div>
  );
}
