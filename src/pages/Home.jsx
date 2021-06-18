import React from "react";
import SliderFullWidth from "../components/SliderFullWidth";
import CardContainerProduct from "../components/CardContainerProduct";
import CardContainerMain from "../components/CardContainerMain";

export default function Home() {
  return (
    <div>
      <SliderFullWidth />
      <CardContainerMain />
      <CardContainerProduct />
    </div>
  );
}
