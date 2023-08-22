import axios from 'axios';

let url_add_business = 'https://i5ge4qpiyg.execute-api.us-east-1.amazonaws.com/v1/business';
let add_business = async (business) => {
    
    return await axios.post(url_add_business, business).then(d => {
        console.log(d.data);
        return d
    });
}


export default add_business;