import React from "react";
import { Card, Col } from "react-bootstrap";
import ButtonCards from "../buttons/ButtonCards";
import CounterCard from "../counters/CounterCard";
import productos from "../../products.json";

export const CardProductMedium = () => {
  return (
    <>
      {productos.map((item, index) => {
        return (
          <Col lg={3} md={6} xs={12} key={index}>
            <Card className="border-0 justify-content-center align-items-center">
              <Card.Img variant="top" src={item.imagen} alt={item.producto} />
              <Card.Body className="text-center">
                <Card.Title>{item.producto}</Card.Title>
                <Card.Text>{item.descripcion}</Card.Text>
                <Card.Text className="d-flex flex-column">
                  <span className="font-weight-bold text-primary h4 mb-0">
                    {item.precio}
                  </span>
                  <small className="text-muted">{item.leyenda}</small>
                </Card.Text>
                <CounterCard max={item.stock} />
                <ButtonCards buttonTexts={item.boton} linkProduct={item.link} />
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
export default CardProductMedium;
