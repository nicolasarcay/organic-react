import React from "react";
import {Card} from 'react-bootstrap';
import ButtonPrincipal from "../buttons/ButtonPrincipal";

export default function SliderFullWidth() {
  return (
    
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://picsum.photos/400/300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ButtonPrincipal callToAction="Ver Producto" />
      </Card.Body>
    </Card>
  );
}
