import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";

const CartWidget = () => {
  return (
    <div>
      <a href="#cart" className="text-dark">
        <FontAwesomeIcon icon={faOpencart} className="fa-lg" />
      </a>
    </div>
  );
};

export default CartWidget;
