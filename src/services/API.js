import axios from "axios";

export default(url='https://jsonplaceholder.typicode.com/todos/') => {
    return axios.create({
        baseURL: url,
    }
    )}