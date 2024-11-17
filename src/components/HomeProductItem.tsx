import React from "react";
import { ProductType } from "./HomeProducts";


const HomeProductItem: React.FC<{ item: ProductType }> = ({ item }) => {
  return (
    <div>
      <img src={item.img} alt="" />
      <h2>{item.name}</h2>

    </div>
  );
};

export default HomeProductItem;
