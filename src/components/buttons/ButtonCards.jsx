import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ButtonCards(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Link to={`/ProductDetail/${props.linkProduct}`}>
        <p className="btn btn-primary btn-card font-weight-bold">
          {props.buttonTexts}
        </p>
      </Link>
    </div>
  );
}
