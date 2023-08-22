import React, { useContext, useState } from "react";
import businessTypes from "../data/BusinessTypes";
import { useNavigate } from "react-router-dom";
import "../styles/BusinessInsert.css";
import { FinSlnContext } from "../App";
import update_business from "../utils/updateBusiness";

const BusinessUpdate = () => {
  let navigate = useNavigate();
  let [FinsLnState, setFinSlnState] = useContext(FinSlnContext);

  // console.log(FinsLnState);
  const [newBusiness, setNewBusiness] = useState(
    FinsLnState.dynamoDBObjectForBusiness.business.info
  );
  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const goBackToDisplay = () => {
    navigate("/listings");
  };

  const handleSaveBusiness = () => {
    update_business({
      ...FinsLnState.dynamoDBObjectForBusiness,
      business: {
        ...FinsLnState.dynamoDBObjectForBusiness.business,
        info: newBusiness,
      },
    }).then(() => goBackToDisplay());
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSave = () => {
    alert("Business Updated");
    if (
      newBusiness.name &&
      newBusiness.revenue > 0 &&
      isEmailValid(newBusiness.email) &&
      isPhoneNumberValid(newBusiness.phoneNumber) &&
      newBusiness.address &&
      newBusiness.type
    ) {
      handleSaveBusiness();
    } else {
      alert("Please fill out all fields correctly before saving.");
    }
  };

  return (
    <div className="add-business-form">
      <h3>Add New Business</h3>
      <label>Name:</label>
      <input
        type="text"
        value={newBusiness.name}
        onChange={(e) =>
          setNewBusiness({ ...newBusiness, name: e.target.value })
        }
      />
      <br />
      <label>Revenue:</label>
      <input
        type="number"
        value={newBusiness.revenue}
        onChange={(e) =>
          setNewBusiness({
            ...newBusiness,
            revenue: parseInt(e.target.value),
          })
        }
      />
      <br />
      <label>Email:</label>
      <input
        type="email"
        value={newBusiness.email}
        onChange={(e) =>
          setNewBusiness({ ...newBusiness, email: e.target.value })
        }
      />
      <br />
      <label>Phone Number:</label>
      <input
        type="text"
        value={newBusiness.phoneNumber}
        onChange={(e) =>
          setNewBusiness({ ...newBusiness, phoneNumber: e.target.value })
        }
      />
      <br />
      <label>Address:</label>
      <input
        type="text"
        value={newBusiness.address}
        onChange={(e) =>
          setNewBusiness({ ...newBusiness, address: e.target.value })
        }
      />
      <br />
      <label>Type:</label>
      <select
        value={newBusiness.type}
        onChange={(e) =>
          setNewBusiness({ ...newBusiness, type: e.target.value })
        }
      >
        <option value="">Select Type</option>
        {businessTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <br />
      <button onClick={handleSave}>Save Business</button>
      <button
        type="back-button"
        onClick={() => {
          navigate("/listings");
        }}
      >
        Back
      </button>
    </div>
  );
};

export default BusinessUpdate;
