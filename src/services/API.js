import axios from "axios";

export default(url='https://api.marketaux.com/v1/news/all?exchanges=NYSE&filter_entities=true&limit=10') => {
    return axios.create({
        baseURL: url,
        withCredentials: false,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
    }
    )}