import API from "./API";

export default {
    getNews() {
        return API().get('&apiKey=8f849ca8e2664998ad36fc2b3e0360af')
          // Gives us an axios instance with the default base url with the events apis
    },
    getNewsSingle(id) {
        return API().get('&apiKey=8f849ca8e2664998ad36fc2b3e0360af/'  + id)
    }

}
