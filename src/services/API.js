import axios from "axios";

export default(url='https://newsdata.io/api/1/') => {
    return axios.create({
        baseURL: url,
        withCredentials: false,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
    }
    )}