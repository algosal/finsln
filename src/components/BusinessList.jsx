import React, { useContext, useEffect, useState } from "react";
import "../styles/BusinessListings.css"; // Import the CSS file
import BusinessDisplay from "./BusinessDisplay";
// import initialQuestionnaire from "../data/InitialQuestions";
import { useNavigate } from "react-router-dom";
import { FinSlnContext } from "../App";
import get_businesses from "../utils/getAllBusinesses";

const BusinessList = () => {
  const navigate = useNavigate();
  const [FinsLnState, setFinSlnState] = useContext(FinSlnContext);

  const [businesses, setBusinesses] = useState([]);

  const functionToSetInitialBusinesses = async () => {
    // console.log(FinsLnState.dynamoDBObjectForBusiness.email);
    await get_businesses({
      email: FinsLnState.dynamoDBObjectForBusiness.email,
    }).then((d) => {
      let dynaDBRes = d.data.body;
      // console.log(d);
      setBusinesses(dynaDBRes);
    });
  };
  useEffect(() => {
    functionToSetInitialBusinesses();
  }, []);
  const handleAddBusiness = () => {
    navigate("/info");
  };

  return (
    <div className="business-list-container">
      <h1 className="business-list-title">Businesses</h1>
      <button className="add-business-button" onClick={handleAddBusiness}>
        Add New Business
      </button>
      <BusinessDisplay businesses={businesses} />
    </div>
  );
};

export default BusinessList;
