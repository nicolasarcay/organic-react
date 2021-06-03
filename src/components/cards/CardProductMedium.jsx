import React from "react";
import { Card } from "react-bootstrap";
import ButtonCards from "../buttons/ButtonCards";

export default function SliderFullWidth(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.productImg} />
      <Card.Body className="text-center">
        <Card.Title>{props.productTitle}</Card.Title>
        <Card.Text>{props.productDescription}</Card.Text>
        <Card.Text className="d-flex flex-column">
          <span className="font-weight-bold text-primary h4 mb-0">
            {props.productPrice}
          </span>
          <small className="text-muted">{props.productQuantity}</small>
        </Card.Text>
        <ButtonCards buttonTexts={props.productButton} />
      </Card.Body>
    </Card>
  );
}
