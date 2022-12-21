<template>
  <div class="event-list">
    <EventCard v-for="event in events" :key="event.id" :event="events" />
    <h2>Test Event List</h2>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import eventAPI from "../services/eventAPI";
export default {
  name: "EventList",

  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    eventAPI
      .getNews()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
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
