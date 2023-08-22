import axios from "axios";

let url_update_business =
  "https://i5ge4qpiyg.execute-api.us-east-1.amazonaws.com/v1/business";
let update_business = async (business) => {
  return await axios.put(url_update_business, business).then((d) => {
    // console.log(d);
  });
};

export default update_business;
