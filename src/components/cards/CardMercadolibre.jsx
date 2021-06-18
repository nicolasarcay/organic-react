import React, { useState, useEffect } from "react";
import { Card, Col, Spinner } from "react-bootstrap";
import ButtonCards from "../buttons/ButtonCards";
import CounterCard from "../counters/CounterCard";

function CardMercadolibre() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <>
      {data !== null ? (
        data.map((data, index) => {
          return (
            <Col lg={3} md={6} xs={12} key={index}>
              <Card className="border-0 justify-content-center align-items-center h-100">
                <Card.Img variant="top" src={data.image} alt={data.title} />
                <Card.Body className="text-center">
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                  <Card.Text className="d-flex flex-column">
                    <span className="font-weight-bold text-primary h4 mb-0">
                      $ {data.price}
                    </span>
                    <small className="text-muted">{data.category}</small>
                  </Card.Text>
                  <CounterCard max={data.id} />
                  <ButtonCards buttonTexts="comprar" />
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <Spinner animation="border" variant="success" />
      )}
    </>
  );
}

export default CardMercadolibre;
