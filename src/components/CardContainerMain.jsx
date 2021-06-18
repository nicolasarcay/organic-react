import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardCategory from "./cards/CardCategory";

export default function CardContainerMain() {
  return (
    <Container>
      <Row className="py-5 px-3 justify-content-between">
        <Col
          md={3}
          xs={12}
          className="bg-card bg-card-fruit d-flex flex-column justify-content-center"
        >
          <CardCategory
            cardSubTitle="Frutas"
            cardTitle="Citricos"
            cardDescription="Esta estacion esta llena de vitamina C"
            buttonText="Productos"
            linkProduct="/Category"
          />
        </Col>
        <Col
          md={3}
          xs={12}
          className="bg-card bg-card-vegetable d-flex flex-column justify-content-center"
        >
          <CardCategory
            cardSubTitle="Vegetales"
            cardTitle="Otoño"
            cardDescription="El otoño nos regala mucha vida"
            buttonText="Productos"
            linkProduct="/Category"
          />
        </Col>
        <Col
          md={3}
          xs={12}
          className="bg-card bg-card-conservas d-flex flex-column justify-content-center"
        >
          <CardCategory
            cardSubTitle="Consevas"
            cardTitle="Colores"
            cardDescription="El Verano nos dejo lleno de colores"
            buttonText="Productos"
            linkProduct="/Category"
          />
        </Col>
      </Row>
    </Container>
  );
}
