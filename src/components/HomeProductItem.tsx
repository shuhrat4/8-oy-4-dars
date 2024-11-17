import React, { useState } from "react";
import { ProductType } from "./HomeProducts";

const HomeProductItem: React.FC<{ item: ProductType }> = ({ item }) => {
  const [selectedCrust, setSelectedCrust] = useState("тонкое"); 
  const [selectedSize, setSelectedSize] = useState("26 см"); 

  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-center">
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-auto rounded-md mb-4"
      />

      <h2 className="text-xl font-bold mb-2">{item.name}</h2>

      <div className="flex justify-center gap-2 mb-2">
        <button
          onClick={() => setSelectedCrust("тонкое")}
          className={`px-3 py-1 border rounded-md ${
            selectedCrust === "тонкое" ? "bg-gray-200" : ""
          }`}
        >
          тонкое
        </button>
        <button
          onClick={() => setSelectedCrust("традиционное")}
          className={`px-3 py-1 border rounded-md ${
            selectedCrust === "традиционное" ? "bg-gray-200" : ""
          }`}
        >
          традиционное
        </button>
      </div>

      <div className="flex justify-center gap-2 mb-2">
        {["26 см", "30 см", "40 см"].map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-3 py-1 border rounded-md ${
              selectedSize === size ? "bg-gray-200" : ""
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold text-gray-700">от {item.price} ₽</span>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
          + Добавить
        </button>
      </div>
    </div>
  );
};

export default HomeProductItem;
