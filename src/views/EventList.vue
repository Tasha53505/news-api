<template>
  <div class="event-list">
    <EventCard v-for="headline in news.articles" :key="headline" :headline="headline" />
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
      news: [],
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
