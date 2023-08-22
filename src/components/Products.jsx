import React from "react";
import "./ProductCards.css"; // Import your CSS file for styling
import productsData from "./productData";

function ProductCards() {
  return (
    <div className="product-cards">
      {productsData.map((product, index) => (
        <div className="product-card" key={index}>
          <h3 className="product-title">{product.title}</h3>
          <p className="product-description">{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
