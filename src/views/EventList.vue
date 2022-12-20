<template>
  <div class="event-list">
    <EventCard />
    <h2>Test Event List</h2>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
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
