<template>
  <div v-if="news" class="event-details">
    <h1>{{ news.title }}</h1>
    <p>{{ news.time }} on {{ news.date }} @ {{ news.location }}</p>
    <p>{{ news.description }}</p>
  </div>
</template>

<script>
import EventAPI from "../services/EventAPI.js";

export default {
  name: "EventDetails",
  props: ["id"],
  // props id ^^ is fed into the "this.id" Event api call
  data() {
    return {
      news: null,
    };
  },
  created() {
    // fetch event by id and set local data
    EventAPI.getNewsSingle(this.id)
      .then((response) => {
        this.news = response.data;
        // This.events = means null in our data is being replaced
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
.event-details {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-weight: 500;
  color: rgb(237, 127, 158);
}

p {
  font-size: medium;
  color: rgb(240, 145, 172);
}
</style>
