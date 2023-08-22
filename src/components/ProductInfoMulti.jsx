import React, { useState } from "react";
import desiresArray from "../data/lf8";
import wantsArray from "../data/w9";

const DesiresAndWantsForm = () => {
  const [selectedDesires, setSelectedDesires] = useState([]);
  const [selectedWants, setSelectedWants] = useState([]);
  const [entity, setEntity] = useState("");
  const [description, setDescription] = useState("");

  const handleDesireChange = (event) => {
    setSelectedDesires(
      Array.from(event.target.selectedOptions, (option) => option.value)
    );
  };

  const handleWantChange = (event) => {
    setSelectedWants(
      Array.from(event.target.selectedOptions, (option) => option.value)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with the selected values (e.g., sending to a server)
    console.log("Selected Desires:", selectedDesires);
    console.log("Selected Wants:", selectedWants);
    console.log("Entity:", entity);
    console.log("Description:", description);
  };

  return (
    <div className="form-container">
      <h2>Desires and Wants Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Desires:</label>
          <select
            multiple
            value={selectedDesires}
            onChange={handleDesireChange}
          >
            {desiresArray.map((desire, index) => (
              <option key={index} value={desire.desire}>
                <input
                  type="checkbox"
                  value={desire.desire}
                  checked={selectedDesires.includes(desire.desire)}
                  onChange={() => {}}
                />
                {desire.desire}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select Wants:</label>
          <select multiple value={selectedWants} onChange={handleWantChange}>
            {wantsArray.map((want, index) => (
              <option key={index} value={want.wants}>
                <input
                  type="checkbox"
                  value={want.wants}
                  checked={selectedWants.includes(want.wants)}
                  onChange={() => {}}
                />
                {want.wants}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          value={entity}
          onChange={(event) => setEntity(event.target.value)}
          placeholder="Entity"
        />
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Description"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DesiresAndWantsForm;
