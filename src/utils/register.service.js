import axios from 'axios';

let register_url = 'https://i5ge4qpiyg.execute-api.us-east-1.amazonaws.com/v1/user/register'; 
let register_user = async (user) => {
    return await axios.post(register_url, user).then(data => data.data.body).catch(e=>e);
}


export default register_user;