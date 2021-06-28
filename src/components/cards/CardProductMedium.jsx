import React from 'react';
import { Card, Col } from "react-bootstrap";
import ButtonCards from "../buttons/ButtonCards";
import { Link } from 'react-router-dom';

function CardProductMedium({imagen, producto, descripcion, precio, leyenda, boton, link, id}) {
  return (
      <Col lg={3} md={6} xs={12}>
            <Card className="border-0 justify-content-center align-items-center">
              <Card.Img variant="top" src={imagen} alt={producto} />
              <Card.Body className="text-center">
                <Link to={`/${link}`}>
                  <Card.Title>{producto}</Card.Title>
                </Link>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text className="d-flex flex-column">
                  <span className="font-weight-bold text-primary h4 mb-0">
                    $ {precio}
                  </span>
                  <small className="text-muted">{leyenda}</small>
                </Card.Text>
                <ButtonCards buttonTexts={boton} linkProduct={link} />
              </Card.Body>
            </Card>
          </Col>
  )
}

export default CardProductMedium


