import { useContext } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { FinSlnContext } from "../App";
import paymentGateway from "./bank.service";
import { useNavigate } from "react-router-dom";

export default function SquarePaymentComponent() {
  let [FinsLnState] = useContext(FinSlnContext);
  let navigate = useNavigate("./");
  // alert(JSON.stringify(FinsLnState));
  // console.log("In the Final Payment State Mode", JSON.stringify(FinsLnState));

  return (
    <div className="square-container">
      <div className="main-square-div">
        <h1 className="main-square-heading-div">
          <div className="special-font">
            Fin<span className="square-s">S</span>ln
          </div>
        </h1>
        Payment Form
        <h3 className="main-square-h3-div">Initial Business Assessment</h3>
        <h2 className="main-square-h2-div">Total: $799.99</h2>
      </div>
      <PaymentForm
        applicationId="sandbox-sq0idb-rjKPfKEHizI4LPV1lYyjNA"
        cardTokenizeResponseReceived={(token, verifiedBuyer) => {
          alert(JSON.stringify(token.token));
          //          setFinSlnState({ ...FinsLnState, nonce: "cnon:card-nonce-ok" });
          // alert(JSON.stringify(FinsLnState));
          console.log({
            ...FinsLnState.dynamoDBObjectForBusiness,
            nonce: "cnon:card-nonce-ok",
          });
          paymentGateway({
            ...FinsLnState.dynamoDBObjectForBusiness,
            nonce: "cnon:card-nonce-ok",
          }).then((d) => {
            alert(d);
            navigate("/");
          });
          // console.log("token:", token);
          // console.log("verifiedBuyer:", verifiedBuyer);
        }}
        locationId="LP1W66XNB3MWG"
      >
        <CreditCard />
      </PaymentForm>
    </div>
  );
}
