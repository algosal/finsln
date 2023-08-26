import { useContext } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { FinSlnContext } from "../App";
import paymentGateway from "./bank.service";
import { useNavigate } from "react-router-dom";
import update_business from "../utils/updateBusiness";
import { useState } from "react";

export default function SquarePaymentComponent() {
  let [FinSlnState] = useContext(FinSlnContext);
  let [showWait, setShowWatit] = useState(false);
  let navigate = useNavigate("./");
  // alert(JSON.stringify(FinSlnState));
  // console.log("In the Final Payment State Mode", JSON.stringify(FinSlnState));

  return (
    <div className="square-container">
      <div className="main-square-div">
        <h1 className="main-square-heading-div">
          <div className="special-font">
            Fin<span className="square-s">S</span>ln
          </div>
        </h1>
        Payment Form
        {showWait ? <h1 className="square-wait">PLEASE WAIT</h1> : <></>}
        <h3 className="main-square-h3-div">Initial Business Assessment</h3>
        <h2 className="main-square-h2-div">Total: $799.99</h2>
      </div>
      <PaymentForm
        applicationId="sandbox-sq0idb-rjKPfKEHizI4LPV1lYyjNA"
        cardTokenizeResponseReceived={(token, verifiedBuyer) => {
          setShowWatit(true);
          // alert(JSON.stringify(token.token));
          //          setFinSlnState({ ...FinsLnState, nonce: "cnon:card-nonce-ok" });
          // alert(JSON.stringify(FinsLnState));
          // console.log({
          //   ...FinSlnState.dynamoDBObjectForBusiness,
          //   nonce: "cnon:card-nonce-ok",
          // });
          paymentGateway({
            ...FinSlnState.dynamoDBObjectForBusiness,
            nonce: "cnon:card-nonce-ok",
          }).then((d) => {
            // alert(d);
            setShowWatit(false);

            update_business({
              ...FinSlnState.dynamoDBObjectForBusiness,
              business: {
                ...FinSlnState.dynamoDBObjectForBusiness.business,
                questions: [],
              },
            });
            navigate("/");
          });
        }}
        locationId="LP1W66XNB3MWG"
      >
        <CreditCard />
      </PaymentForm>
    </div>
  );
}
