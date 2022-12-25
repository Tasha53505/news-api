import API from "./API";

export default {
    getNews() {
        return API().get('sources?apikey=pub_14910a317e697a19441d7e6c15432ffb17cd8&language=ar')
          // Gives us an axios instance with the default base url with the events apis
    },
    getNewsSingle(id) {
        return API().get('sources?apikey=pub_14910a317e697a19441d7e6c15432ffb17cd8&language=ar' + id)
    }

}
