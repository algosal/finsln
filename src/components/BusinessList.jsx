import React, { useCallback, useContext, useEffect, useState } from "react";
import "../styles/BusinessListings.css"; // Import the CSS file
import BusinessDisplay from "./BusinessDisplay";
// import initialQuestionnaire from "../data/InitialQuestions";
import { useNavigate } from "react-router-dom";
import { FinSlnContext } from "../App";
import get_businesses from "../utils/getAllBusinesses";

const BusinessList = () => {
  const navigate = useNavigate();
  const [FinsLnState] = useContext(FinSlnContext);

  const [businesses, setBusinesses] = useState([]);

  const functionToSetInitialBusinesses = useCallback(async () => {
    // console.log(FinsLnState.dynamoDBObjectForBusiness.email);
    await get_businesses({
      email: FinsLnState.dynamoDBObjectForBusiness.email,
    }).then((d) => {
      let dynaDBRes = d.data.body;
      // console.log(d);
      setBusinesses(dynaDBRes);
    });
  }, [FinsLnState.dynamoDBObjectForBusiness.email]);

  useEffect(() => {
    functionToSetInitialBusinesses();
  }, [functionToSetInitialBusinesses]);
  const handleAddBusiness = () => {
    navigate("/info");
  };

  const goBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="business-list-container">
      <h1 className="business-list-title">Businesses</h1>
      <button className="add-business-button" onClick={handleAddBusiness}>
        Add New Business
      </button>
      <button type="back-button" onClick={goBack}>
        Back{" "}
      </button>
      <BusinessDisplay businesses={businesses} />
    </div>
  );
};

export default BusinessList;
