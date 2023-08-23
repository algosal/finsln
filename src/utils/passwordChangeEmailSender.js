import axios from "axios";

let sendEmailToChangePassword = async (email) => {
  let password_email_url =
    "https://i5ge4qpiyg.execute-api.us-east-1.amazonaws.com/v1/user/password";
  return await axios.put(password_email_url, email).then((d) => d.data.body);
};

export default sendEmailToChangePassword;
