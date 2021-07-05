import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/HelperFirebase";
import 'firebase/firestore';
import HeaderProduct from "../components/products-layout/HeaderProduct";
import ContentProduct from "../components/products-layout/ContentProduct";
import CardContainerProduct from "../components/CardContainerProduct";
import { Container, Row, Col } from "react-bootstrap";

const ProductDetail = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
  
    const itemColection = db.collection("items");

    itemColection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0 ) {
        console.log('no hay resultados!')
      }
      setItems (querySnapshot.docs.map(doc => doc.data()));
    }).catch((error) => {
      console.log("error buscando archivos", error);
    }).finally(() => {
      setLoading(false);
    });
  }, [])

  return (
    <div>
      {console.log(items)}
    </div>
  );
};

export default ProductDetail;
