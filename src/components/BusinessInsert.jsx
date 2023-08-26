import React, { useContext, useState } from "react";
import businessTypes from "../data/BusinessTypes";
import { useNavigate } from "react-router-dom";
import "../styles/BusinessInsert.css";
import add_business from "../utils/addBusiness";
import { FinSlnContext } from "../App";
import businessLegals from "../data/BusinessLegals";

const BusinessInsert = () => {
  let [FinSlnState, setFinSlnState] = useContext(FinSlnContext);
  // console.log(FinSlnState.dynamoDBObjectForBusiness);
  let navigate = useNavigate();
  let initial_state = {
    id: Date.now(),
    name: "",
    revenue: 0,
    email: "",
    phoneNumber: "",
    address: "",
    legal: "",
    type: "",
  };
  const [newBusiness, setNewBusiness] = useState(initial_state);
  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const goBackToDisplay = () => {
    navigate("/listings");
  };

  const handleSaveBusiness = (business) => {
    add_business(business).then((d) => {
      alert("Business Added");
      goBackToDisplay();
    });
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSave = () => {
    const validationErrors = [];

    if (!newBusiness.name) {
      validationErrors.push("Name is required.");
    }

    if (newBusiness.revenue <= 0) {
      validationErrors.push("Revenue must be greater than 0.");
    }

    if (!isEmailValid(newBusiness.email)) {
      validationErrors.push("Email is invalid.");
    }

    if (!isPhoneNumberValid(newBusiness.phoneNumber)) {
      validationErrors.push("Phone number is invalid. Use 10 digits.");
    }

    if (!newBusiness.address) {
      validationErrors.push("Address is required.");
    }

    if (!newBusiness.legal) {
      validationErrors.push("Legal Structure is required.");
    }

    if (!newBusiness.type) {
      validationErrors.push("Type is required.");
    }

    if (validationErrors.length === 0) {
      setFinSlnState({ ...FinSlnState, info: newBusiness });
      handleSaveBusiness({
        business: {
          info: newBusiness,
          questions: [],
        },
        email: FinSlnState.dynamoDBObjectForBusiness.email,
      });
    } else {
      alert(
        "Please correct the following errors:\n" + validationErrors.join("\n")
      );
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
      <label>Legal Structure:</label>
      <select
        value={newBusiness.legal}
        onChange={(e) =>
          setNewBusiness({ ...newBusiness, legal: e.target.value })
        }
      >
        <br />

        <option value="">Select Legal Structure of the Business</option>
        {businessLegals.map((legal) => (
          <option key={legal} value={legal}>
            {legal}
          </option>
        ))}
      </select>
      <br />
      <br />
      <label>Type:</label>
      <select
        value={newBusiness.type}
        onChange={(e) =>
          setNewBusiness({ ...newBusiness, type: e.target.value })
        }
      >
        <br />

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

export default BusinessInsert;
