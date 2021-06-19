import React, { useEffect} from "react";

const ButtonPrincipal = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <p
        href="#shop"
        className="btn btn-primary btn-main container-main-button-fresh font-weight-bold"
      >
        {props.callToAction}
      </p>
    </div>
  );
};

export default ButtonPrincipal;
