<template>
  <div class="event-list">
    <EventCard v-for="news in news" :key="news.id" :news="news" />
    <h2>Test Event List</h2>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import eventAPI from "@/services/eventAPI";
export default {
  name: "EventList",

  components: {
    EventCard,
  },
  data() {
    return {
      news: null,
    };
  },
  created() {
    eventAPI
      .getNews()
      .then((response) => {
        this.news = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
/*
- getNews() is a function that returns all todos  
- It puts the todos in a response which then stores it in this.events
*/
</script>

<style>
.event-list {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
