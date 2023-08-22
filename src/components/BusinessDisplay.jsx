import React, { useContext } from "react";
// import ClientQuestionnaire from "./PreQuestionnaire";
import { useNavigate } from "react-router-dom";
import { FinSlnContext } from "../App";
import delete_business from "../utils/deleteBusiness";

const BusinessDisplay = ({ businesses }) => {
  let navigate = useNavigate();
  let [FinsLnState, setFinSlnState] = useContext(FinSlnContext);

  let handleExpert = (business_record) => {
    setFinSlnState({
      ...FinsLnState,
      dynamoDBObjectForBusiness: { ...business_record },
    });
    navigate("/q");
  };
  return (
    <ul className="business-list">
      {businesses.map((business_item) => {
        let business = JSON.parse(business_item.business).business;
        return (
          <div key={business_item.uuid}>
            <li key={business_item.uuid}>
              <strong>Name:</strong> {business.info.name}
              <br />
              <strong>Revenue:</strong> $
              {business.info.revenue.toLocaleString()}
              <br />
              <strong>Email:</strong> {business.info.email}
              <br />
              <strong>Phone Number:</strong> {business.info.phoneNumber}
              <br />
              <strong>Address:</strong> {business.info.address}
              <br />
              <strong>Type:</strong> {business.info.type}
              <br />
              <button
                onClick={() => {
                  // setFinSlnState({ ...FinsLnState, business });

                  setFinSlnState({
                    ...FinsLnState,
                    dynamoDBObjectForBusiness: { ...business_item, business },
                  });
                  navigate("/edit");
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  delete_business(business_item.uuid);
                  alert(business_item.uuid + " is deleted");

                  navigate("/");
                }}
              >
                Delete
              </button>
              <button
                onClick={() => handleExpert({ ...business_item, business })}
              >
                Reserve an Expert Opinion
              </button>
              <hr />
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default BusinessDisplay;
