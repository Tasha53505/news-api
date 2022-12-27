import axios from "axios";

export default(url='https://newsapi.org/v2/top-headlines?pageSize=10&country=nz&sortBy=publishedAt') => {
    return axios.create({
        baseURL: url,
        withCredentials: false,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
    }
    )}