import React from "react";
import ReasonInputForm from "./ReasonInputForm";
import reasonsToDoBusiness from "./reasonsData"; // Import the array

const ReasonsToDoBusinessAnalysis = () => {
  return (
    <div>
      <h1>Business Reasons Input</h1>
      <ReasonInputForm reasons={reasonsToDoBusiness} />
    </div>
  );
};

export default ReasonsToDoBusinessAnalysis;
