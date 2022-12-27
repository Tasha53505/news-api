<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: headline.id } }"
  >
    <div class="event-card">
      <h2>{{ headline.title }}</h2>
      <span>@ {{ headline.publishedAt }} </span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    headline: {
      type: [Object, Number, String],
      required: true,
    },
  },
};
</script>

<style>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid rgb(184, 63, 116);
  margin-bottom: 18px;
  color: rgb(215, 107, 168);
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(194, 66, 104, 0.5);
}

/* .event-link {
  text-decoration: none;
  color: black;
}
.event-link:hover {
  opacity: 0.88;
} */
</style>
