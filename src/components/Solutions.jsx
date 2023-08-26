import React, { useState, useEffect } from "react";
import axios from "axios";
import RecordDetail from "./SolutionDetails.js";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Solutions.css";

const Solutions = () => {
  const location = useLocation();
  const uuid = location.state.uuid;
  const [solutionDetails, setSolutionDetails] = useState(RecordDetail);
  // console.log(uuid);
  let navigate = useNavigate();
  useEffect(() => {
    // Fetch solution details array from DynamoDB (replace with your API endpoint)
    const fetchSolutionDetails = async () => {
      try {
        await axios
          .put(
            "https://i5ge4qpiyg.execute-api.us-east-1.amazonaws.com/v1/solutions",
            {
              "order-uuid": uuid,
            }
          )
          .then((d) => {
            // console.log(d.data.body);
            setSolutionDetails(JSON.parse(d.data.body));
          });
      } catch (error) {
        console.error("Error fetching solution details:", error);
      }
    };

    fetchSolutionDetails();
  }, [uuid]);

  let goBack = () => {
    navigate("/orders");
  };
  return (
    <div className="solutions-container">
      <h1 className="solution-heading">Solution Details List</h1>
      {solutionDetails.map((solution) => (
        <div
          className="record-detail"
          onClick={() => {
            window.open(solution.s3Link);
          }}
        >
          <p className="solution-title">Title: {solution.name}</p>
          <p className="solution-description">
            Description: {solution.fileDescription}
          </p>
          <p>Tap to Download the File</p>
          {/* <p className="solution-description">Prepared by: {solution.employee}</p> */}
        </div>
      ))}
      <button type="back-button" className="back-to-orders" onClick={goBack}>
        Back
      </button>
    </div>
  );
};

export default Solutions;
