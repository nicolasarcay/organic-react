import React, { useEffect, useState } from "react";
import CardProductMedium from "./cards/CardProductMedium";
import { getFirestore } from "../firebase/HelperFirebase";
import "firebase/firestore";

export const CardContainerProduct = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db
      .collection("products")
      .where("destacado", "==", true);
    itemCollection
      .get()
      .then((querySnapshot) => {
        return querySnapshot.docs.map((doc) => doc.data());
      })
      .then((arr) => {
        return arr.sort(() => Math.random() - 0.5);
      })
      .then((desorden) => {
        if (desorden.size === 0) {
          console.log("no hay resultados");
        }
        setItem(desorden.slice(0,4));
      })
      .catch((error) => {
        console.log("Error searching item", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(item.length);
  if (item.length > 0) {
    return (
      <>
        {item.map((producto, index) => {
          return (
            <CardProductMedium
              key={index}
              id={producto.id}
              imagen={producto.imagen}
              producto={producto.producto}
              descripcion={producto.descripcion}
              precio={producto.precio}
              leyenda={producto.leyenda}
              boton={producto.boton}
              link={producto.link}
            />
          );
        })}
      </>
    );
  } else {
    return <></>;
  }
};
export default CardContainerProduct;
