import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardProductMedium from "./cards/CardProductMedium";
import frutillas from "../img/frutillas.jpg";
import naranjas from "../img/naranjas.jpg";
import platano from "../img/platano.jpg";
import uvas from "../img/uvas.jpg";

export default function SliderFullWidth() {
  return (
    <Container>
      <Row className="py-5 px-1">
        <Col lg={3} md={6} xs={12}>
          <CardProductMedium
            productTitle="Frutillas"
            productDescription="Frutillas de Rio Negro"
            productPrice="$ 350"
            productQuantity="Precio por Kilo"
            productButton="Comprar"
            productImg={frutillas}
          />
        </Col>
        <Col lg={3} md={6} xs={12}>
          <CardProductMedium
            productTitle="Platanos"
            productDescription="Organicos de Brasil"
            productPrice="$ 250"
            productQuantity="Precio por Kilo"
            productButton="Comprar"
            productImg={platano}
          />
        </Col>
        <Col lg={3} md={6} xs={12}>
          <CardProductMedium
            productTitle="Naranjas"
            productDescription="Naranjas de Entre Rios"
            productPrice="$ 95"
            productQuantity="Precio por Kilo"
            productButton="Comprar"
            productButton="Comprar"
            productPrice="$ 95"
            productImg={naranjas}
          />
        </Col>
        <Col lg={3} md={6} xs={12}>
          <CardProductMedium
            productTitle="Uvas"
            productDescription="Uvas de Mendoza"
            productPrice="$ 150"
            productQuantity="Precio por Kilo"
            productButton="Comprar"
            productImg={uvas}
          />
        </Col>
      </Row>
    </Container>
  );
}
