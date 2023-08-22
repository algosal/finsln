import React from "react";
import "./ProductCards.css";

function Businesses() {
  return (
    <div className="product-cards">
      <div className="business-card">
        <div className="product-title">Satart Ups</div>
        <p className="product-description">Need Budgeting, Documentation? </p>
        <a href="https://finsln.com" className="product-button">
          Learn More
        </a>
      </div>

      <div className="business-card">
        <div className="product-title">Micro Businesses</div>
        <p className="product-description">
          Want Increased Revenue, Sales and Profit?
        </p>
        <a href="https://finsln.com" className="product-button">
          Learn More
        </a>
      </div>

      <div className="business-card">
        <div className="product-title">Small Businesses</div>
        <p className="product-description">Expanding Business?</p>
        <a href="https://finsln.com" className="product-button">
          Learn More
        </a>
      </div>

      <div className="business-card">
        <div className="product-title">Mid Size Businesses</div>
        <p className="product-description">
          Investment Ready? Looking for Investors.
        </p>
        <a href="https://finsln.com" className="product-button">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Businesses;
