import axios from "axios";

let getclientValues = async (email) => {
  let values_url =
    "https://i5ge4qpiyg.execute-api.us-east-1.amazonaws.com/v1/valuesofclients";
  return await axios
    .put(values_url, { email })
    .then((d) => {
      //   console.log("the Value returned", d.data.body.reasons);
      return JSON.parse(d.data.body.reasons) || [];
    })
    .catch((e) => e);
};

export default getclientValues;
