import axios from "axios";

let url_delete_business =
  "https://i5ge4qpiyg.execute-api.us-east-1.amazonaws.com/v1/business";
let delete_business = async (businessUUId) => {
  console.log(businessUUId);

  return await axios
    .delete(url_delete_business, { data: { uuid: businessUUId } })
    .then((d) => {
      // console.log(d.data);
      return d.data.body;
    });
};

export default delete_business;
