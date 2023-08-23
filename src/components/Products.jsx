import React from "react";
import "./ProductCards.css"; // Import your CSS file for styling
import productsData from "./productData";
import { useNavigate } from "react-router-dom";

function ProductCards() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="product-cards">
        {productsData.map((product, index) => (
          <div className="product-card" key={index}>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
      <div className="back-button-products">
        <button
          type="back-button"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default ProductCards;
