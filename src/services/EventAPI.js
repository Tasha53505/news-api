import API from "./API";

export default {
    getNews() {
        return API().get('/events/')
          // Gives us an axios instance with the default base url with the events apis
    },
    getNewsSingle(id) {
        return API().get('/events/' + id)
    }

}
