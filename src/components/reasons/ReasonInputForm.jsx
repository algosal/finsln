import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReasonInputForm = ({ reasons }) => {
  let navigate = useNavigate();
  // State to store the inputs for each reason
  const [reasonInputs, setReasonInputs] = useState(
    reasons.map((reason) => ({
      ...reason,
      questions: [], // Initialize questions array
    }))
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle input changes for each reason
  const handleInputChange = (index, inputName, value) => {
    const updatedInputs = [...reasonInputs];
    updatedInputs[index][inputName] = value;
    setReasonInputs(updatedInputs);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inputs for each reason:", reasonInputs);
    alert(JSON.stringify(reasonInputs));
  };

  // Function to handle saving data to the database
  const handleSaveToDatabase = () => {
    // alert(JSON.stringify(reasonInputs));
    navigate("/dashboard");
  };

  // Function to handle moving to the next reason
  const handleNext = () => {
    if (currentIndex < reasonInputs.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Function to handle moving to the previous reason
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const currentReason = reasonInputs[currentIndex];

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>
            Reason:
            <select
              value={currentReason.reason}
              onChange={(e) => {
                const selectedReason = e.target.value;
                const selectedIndex = reasons.findIndex(
                  (reason) => reason.reason === selectedReason
                );
                setCurrentIndex(selectedIndex);
              }}
            >
              {reasons.map((reason, index) => (
                <option key={index} value={reason.reason}>
                  {reason.reason}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label>
            Importance in Percentage:
            <input
              type="number"
              value={currentReason.importance}
              onChange={(e) =>
                handleInputChange(
                  currentIndex,
                  "importance",
                  parseInt(e.target.value)
                )
              }
            />
          </label>
        </div>

        <div>
          <label>
            Level:
            <select
              value={currentReason.level}
              onChange={(e) =>
                handleInputChange(currentIndex, "level", e.target.value)
              }
            >
              <option value="">Select Level</option>
              <option value="High">High</option>
              <option value="Moderate">Moderate</option>
              <option value="Low">Low</option>
            </select>
          </label>
        </div>

        <div>
          <p>
            Number of Questions: {currentIndex + " of " + (reasons.length - 1)}
          </p>
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={currentIndex === reasons.length - 1}
        >
          Next
        </button>
        {/* <button type="submit">Add Reason</button> */}
        <button type="back-button" onClick={handleSaveToDatabase}>
          Back to Dashboard
        </button>
      </div>
    </form>
  );
};

export default ReasonInputForm;
