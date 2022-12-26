import API from "./API";

export default {
    getNews() {
        return API().get('&api_token=Yqi5mNDKUyVIJ3DmTMDBpLBQabNn7ob0ozSh0SVC')
          // Gives us an axios instance with the default base url with the events apis
    },
    getNewsSingle(uuid) {
        return API().get('&api_token=Yqi5mNDKUyVIJ3DmTMDBpLBQabNn7ob0ozSh0SVC' + uuid)
    }

}
