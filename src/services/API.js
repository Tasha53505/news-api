import axios from "axios";

export default(url='https://my-json-server.typicode.com/tasha53505/json-server-vue-project/') => {
    return axios.create({
        baseURL: url,
        withCredentials: false,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
    }
    )}