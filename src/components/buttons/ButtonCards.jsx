import React from "react";

export default function ButtonCards(props) {
  return (
    <div>
      <a href="#shop" className="btn btn-primary btn-card font-weight-bold">
        {props.buttonTexts}
      </a>
    </div>
  );
}
