import React, { useEffect, useState } from "react";
import CardCartItem from "./cards/CardCartItem";
import { UseCart } from "../provider/CartContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import CardContainerProduct from "./CardContainerProduct";
import ButtonPrincipal from "./buttons/ButtonPrincipal";

function CardContainerCart() {
  const [total, setTotal] = useState(0);
  const { cart, totalCart, removeAllCart } = UseCart();

  const ObtenerTotal = () => {
    setTotal(totalCart());
  };

  useEffect(() => {
    ObtenerTotal();
  }, [cart]);

  if (cart.length > 0) {
    return (
      <Container className="mt-5">
        <Row>
          <Col xs={5} className="font-weight-bold">
            <p>Producto</p>
          </Col>
          <Col xs={2} className="font-weight-bold text-center">
            <p>Precio</p>
          </Col>
          <Col xs={2} className="font-weight-bold text-center">
            <p>Cantidad</p>
          </Col>
          <Col xs={3} className="font-weight-bold text-center">
            <p>Total</p>
          </Col>
        </Row>
        {cart.map((item, index) => {
          return (
            <CardCartItem
              key={index}
              id={item.id}
              producto={item.title}
              precio={item.price}
              cantidad={item.quanty}
              total={item.total}
            />
          );
        })}
        <Row className="justify-content-end align-items-center">
          <Col>
            <Button
              onClick={() => {
                removeAllCart();
              }}
            >
              Borrar Carrito
            </Button>
          </Col>
          <Col xs={3} className="text-right">
            <p className="cursive font-weight-bold h4 text-primary">Total</p>
          </Col>
          <Col xs={3} className="text-center">
            <p>$ {total}</p>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h3 className="font-weight-bold pb-3">Todavia nos has comprado nada</h3>
          <ButtonPrincipal callToAction="Comprar Ahora" link="/Shop" className="my-3" />
          <h2 className="cursive font-weight-bold text-primary py-3">
            Te Recomendamos estos
          </h2>
          <Row className="pt-3">
            <CardContainerProduct />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default CardContainerCart;
