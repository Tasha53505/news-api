import API from "./API";

export default {
    getNews() {
        return API().get('/?skip=5&limit=10')
          // Gives us an axios instance with the default base url with the events apis
    },

}
