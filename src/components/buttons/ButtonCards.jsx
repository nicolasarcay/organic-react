import React from "react";
import { Link } from "react-router-dom";

export default function ButtonCards(props) {
  return (
    <div>
      <Link to={props.linkProduct}>
        <p className="btn btn-primary btn-card font-weight-bold">
          {props.buttonTexts}
        </p>
      </Link>
    </div>
  );
}
