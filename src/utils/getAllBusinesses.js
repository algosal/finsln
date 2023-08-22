import axios from 'axios';

let url_all_businesses = 'https://i5ge4qpiyg.execute-api.us-east-1.amazonaws.com/v1/businesses';
let get_businesses = async (email) => {
    return await axios.put(url_all_businesses, email).then(d => d);
}


export default get_businesses;