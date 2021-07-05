import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/HelperFirebase";
import "firebase/firestore";
import HeaderProduct from "../components/products-layout/HeaderProduct";
import ContentProduct from "../components/products-layout/ContentProduct";
import CardContainerProduct from "../components/CardContainerProduct";
import { Container, Row, Col } from "react-bootstrap";

const ProductDetail = () => {
  const { link } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db
      .collection("products")
      .where("link", "==", `${link}`);
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("no hay resultados");
        }
        setItems(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (items[0] !== undefined) {
    return (
      <div>
        <HeaderProduct
          bg={items[0].bgProduct}
          id={items[0].id}
          producto={items[0].producto}
          descripcion={items[0].descripcion}
          precio={items[0].precio}
          leyenda={items[0].leyenda}
          stock={items[0].stock}
        />
        <ContentProduct img={items[0].imagen} title={items[0].producto} />
        <Container>
          <Row>
            <Col>
              <h3 className="cursive text-primary">Productos Relacionados</h3>
            </Col>
          </Row>
          <Row className="py-5 px-1">
            <CardContainerProduct />
          </Row>
        </Container>
      </div>
    );
  } else{
    return (
      <>
      </>
    );
  }
};
export default ProductDetail;
