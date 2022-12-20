import axios from "axios";

export default(url='https://dummyjson.com/todos/') => {
    return axios.create({
        baseURL: url,
    }
    )}