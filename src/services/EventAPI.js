import API from "./API";

export default {
    getNews() {
        return API().get('/1')
          // Gives us an axios instance with the default base url with the events apis
    }
}
