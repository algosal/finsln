import axios from "axios";

let saveValues = (values_object) => {
  let values_url =
    "https://i5ge4qpiyg.execute-api.us-east-1.amazonaws.com/v1/valuesofclients";
  axios.post(values_url, values_object).then((d) => {
    console.log(d);
  });
};

export default saveValues;
