import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ButtonPrincipal = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Link to={props.link}>
      <p
        className="btn btn-primary btn-main container-main-button-fresh font-weight-bold"
      >
        {props.callToAction}
      </p>
    </Link>
  );
};

export default ButtonPrincipal;
