import React from "react";
import { Col } from "react-bootstrap";
import ButtonCards from "../buttons/ButtonCards";

export default function CardCategory(props) {
  return (
    <div className="card-category row justify-content-end align-items-center h-100">
      <Col lg={7} className="card-category-bg">
        <div className="card-category-texts">
          <h4 className="cursive text-primary font-weight-bold">
            {props.cardSubTitle}
          </h4>
          <h3 className="text-uppercase font-weight-bold">{props.cardTitle}</h3>
          <p>{props.cardDescription}</p>
        </div>
        <ButtonCards buttonTexts={props.buttonText} linkProduct={props.linkProduct} />
      </Col>
    </div>
  );
}
