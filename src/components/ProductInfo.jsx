import React, { useState } from "react";
import desiresArray from "../data/lf8";
import wantsArray from "../data/w9";
import "../styles/MarketForces.css";

const DesiresAndWantsForm = () => {
  const [selectedDesires, setSelectedDesires] = useState([]);
  const [selectedWants, setSelectedWants] = useState([]);
  const [entity, setEntity] = useState("");
  const [description, setDescription] = useState("");

  const handleDesireChange = (event) => {
    const value = event.target.value;
    setSelectedDesires((prevSelectedDesires) =>
      prevSelectedDesires.includes(value)
        ? prevSelectedDesires.filter((desire) => desire !== value)
        : [...prevSelectedDesires, value]
    );
  };

  const handleWantChange = (event) => {
    const value = event.target.value;
    setSelectedWants((prevSelectedWants) =>
      prevSelectedWants.includes(value)
        ? prevSelectedWants.filter((want) => want !== value)
        : [...prevSelectedWants, value]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with the selected values (e.g., sending to a server)
    let ProductObject = {
      selectedDesires,
      selectedWants,
      entity,
      description,
    };
    alert(JSON.stringify(ProductObject));
    setEntity("");
    setSelectedDesires([]);
    setSelectedWants([]);
  };

  return (
    <div className="market-forces-container">
      <h2>Desires and Wants Form</h2>
      <form onSubmit={handleSubmit} className="product-analysis-div">
        <div>
          <label>Select Desires:</label>
          {desiresArray.map((desire, index) => (
            <div key={index}>
              <input
                type="checkbox"
                value={desire.desire}
                checked={selectedDesires.includes(desire.desire)}
                onChange={handleDesireChange}
              />
              {desire.desire}
            </div>
          ))}
        </div>
        <div>
          <label>Select Wants:</label>
          {wantsArray.map((want, index) => (
            <div key={index}>
              <input
                type="checkbox"
                value={want.wants}
                checked={selectedWants.includes(want.wants)}
                onChange={handleWantChange}
              />
              {want.wants}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={entity}
          onChange={(event) => setEntity(event.target.value)}
          placeholder="Entity: Could be a Product, Person or Anything"
        />
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Description: Describe the way this Entity is linked to the desires and wants. What could be the value preposition and if the product is already in the market, then what is it's value preposition?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DesiresAndWantsForm;
