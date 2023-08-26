import React, { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FinSlnContext } from "../../App";
import "../../styles/Orders.css"; // Make sure to import your custom CSS

const PaymentList = () => {
  const [FinsLnState] = useContext(FinSlnContext);
  const [paymentData, setPaymentData] = useState([]);
  const navigate = useNavigate();

  const fetchPaymentInformation = useCallback(async () => {
    await axios
      .put(`https://i5ge4qpiyg.execute-api.us-east-1.amazonaws.com/v1/orders`, {
        email: FinsLnState.dynamoDBObjectForBusiness.email,
      })
      .then((response) => {
        // console.log(response);
        setPaymentData(response.data.body);
      })
      .catch((error) => {
        setPaymentData([]);
        console.error("Error fetching payment information:", error);
      });
  }, [FinsLnState.dynamoDBObjectForBusiness.email]);

  useEffect(() => {
    fetchPaymentInformation();
  }, [fetchPaymentInformation]);

  return (
    <div>
      <h2 className="main-heading">Payment Information</h2>
      <div className="payment-list">
        {paymentData.map((payment) => (
          <div
            className="payment-card"
            key={payment.uuid}
            onClick={() => {
              navigate("/solutions", { state: { uuid: payment.uuid } });
            }}
          >
            <h2 className="payment-card__business">
              {JSON.parse(payment.challenge).info.name}
            </h2>
            <p className="payment-card__status"> Challenge Status: Defined</p>
            <p className="payment-card__status">
              {" "}
              Opportunity Status: {payment.opportunity}
            </p>
            <p className="payment-card__amount">
              Amount Paid: ${parseFloat(payment.amount) / 100}
            </p>
            <p className="payment-card__status">
              Order Status: {payment.status}
            </p>
            {/* <p className="payment-card__email">Email: {payment.email}</p> */}
            {/* <p>Payment ID: {payment.uuid}</p> */}

            {/* Additional payment details can be added here */}
            <hr className="payment-card__divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentList;
