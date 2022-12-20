<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  props: ["id"],
  // props id ^^ is fed into the "this.id" api call
  data() {
    return {
      event: null,
    };
  },
  created() {
    // fetch event by id and set local data
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
        // This.events = means null in our data is being replaced
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

// var requestOptions = {
//     method: 'GET'
// };

// var params = {
//     api_token: 'yIxgQsQhcy5f9dn2bNxPDNeFlnwjLYaP2OjONPAe',
//     categories: 'business,tech',
//     search: 'apple',
//     limit: '50'
// };

// var esc = encodeURIComponent;
// var query = Object.keys(params)
//     .map(function(k) {return esc(k) + '=' + esc(params[k]);})
//     .join('&');

// fetch("https://api.thenewsapi.com/v1/news/all?" + query, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
</script>
