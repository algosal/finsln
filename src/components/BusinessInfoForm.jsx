import React, { useState } from "react";
import "../styles/BusinessInput.css";
const BusinessInfoForm = ({ fields }) => {
  const initialFormData = fields.reduce((formData, field) => {
    formData[field.name] = "";
    return formData;
  }, {});

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can use the 'formData' object with the business information
    console.log("Business Information:", formData);
  };

  return (
    <div className="business-insert-container">
      <form onSubmit={handleSubmit} className="business-insert-form">
        <h2>Business Information Form</h2>
        {fields.map((field) => (
          <div key={field.name} className="insert-div">
            <label className="insert-info-label">{field.label}:</label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                required
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                required
              />
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BusinessInfoForm;
