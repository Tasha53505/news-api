import axios from "axios";

export default(url='https://dummyjson.com/todos/') => {
    return axios.create({
        baseURL: url,
        withCredentials: false,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
    }
    )}