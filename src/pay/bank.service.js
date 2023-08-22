import axios from "axios";

let paymentGateway = async (paymeny_object) => {
  let bank_url =
    "https://i5ge4qpiyg.execute-api.us-east-1.amazonaws.com/v1/business/bank";
  return await axios.post(bank_url, paymeny_object).then((d) => {
    console.log(d);
    return d.data.body;
  });
};

export default paymentGateway;
