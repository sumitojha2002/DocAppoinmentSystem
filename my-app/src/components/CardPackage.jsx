import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/CardPackage.css";
import Pakages from "./Pakages";
import { productData, responsive } from "../data/PakagesData";

export default function CardPackage() {
  const product = productData.map((item) => (
    <Pakages
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="container">
      <Carousel responsive={responsive}>{product}</Carousel>
    </div>
  );
}
