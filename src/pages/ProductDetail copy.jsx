import React from "react";
import { useParams } from "react-router-dom";
import products from "../products.json";
import HeaderProduct from "../components/products-layout/HeaderProduct";
import ContentProduct from "../components/products-layout/ContentProduct";
import CardContainerProduct from "../components/CardContainerProduct";
import { Container, Row, Col } from "react-bootstrap";

const ProductDetail = () => {
  const { link } = useParams();
  const datos = [];
  products.forEach((item) => {
    if (item.link.includes(link)) {
      datos.push(item);
    }
  });
  console.log(datos);
  return (
    <div>
      <HeaderProduct
        bg={datos[0].bgProduct}
        id={datos[0].id}
        producto={datos[0].producto}
        descripcion={datos[0].descripcion}
        precio={datos[0].precio}
        leyenda={datos[0].leyenda}
        stock={datos[0].stock}
      />
      <ContentProduct img={datos[0].imagen} title={datos[0].producto} />
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
};

export default ProductDetail;
