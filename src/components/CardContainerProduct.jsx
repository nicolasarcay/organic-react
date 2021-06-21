import React from "react";
import CardProductMedium from "./cards/CardProductMedium";
import productos from "../products.json";

export const CardContainerProduct = () => {
  return (
    <>
      {productos.map((item, index) => {
        return (
          <CardProductMedium
            key={index}
            imagen={item.imagen}
            producto={item.producto}
            descripcion={item.descripcion}
            precio={item.precio}
            leyenda={item.leyenda}
            boton={item.boton}
            link={item.link}
          />
        );
      })}
    </>
  );
};
export default CardContainerProduct;
