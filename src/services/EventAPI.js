import API from "./API";

export default {
    getNews() {
        return API().get('/3')
          // Gives us an axios instance with the default base url with the events apis
    },
    getNewsSingle(id) {
        return API().get(id)
    }

}
