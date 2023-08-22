import axios from "axios";

let login = async (user) => {
    let login_url = 'https://i5ge4qpiyg.execute-api.us-east-1.amazonaws.com/v1/user/login';
    return await axios.put(login_url, user).then(d =>  d.data.statusCode).catch(e => e);
}

export default login;