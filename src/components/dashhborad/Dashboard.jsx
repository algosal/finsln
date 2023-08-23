import React from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css"; // Add your dashboard styles here

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-links">
        <Link to="/reasons" className="dashboard-link">
          Awareness
        </Link>
        <Link to="/listings" className="dashboard-link">
          Businesses
        </Link>
        <Link to="/im" className="dashboard-link">
          Initial Assessment
        </Link>
        <Link to="/terms" className="dashboard-link">
          Terms and Conditions of use
        </Link>

        {/* <Link to="/client-questionnaire" className="dashboard-link">
          Client Questionnaire
        </Link> */}
        {/* Add more links to other components */}
      </div>
    </div>
  );
};

export default Dashboard;
