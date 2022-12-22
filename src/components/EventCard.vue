<template>
  <!-- <router-link
    class="event-link"
    :to="{ name: 'EventDetails', params: { id: event.id } }"
  > -->
  <div class="event-card">
    <h2>{{ news.title }}</h2>
    <span>@{{ news.title }} on {{ news.id }} Street </span>
  </div>
  <!-- </router-link> -->
</template>

<script>
// import axios from "axios";
// import { ref } from "vue";
// import EventAPI from "@/services/EventAPI";

export default {
  name: "EventCard",
  props: {
    news: {
      type: [Object, Number, String],
      required: true,
    },
  },

  // setup() {
  //   const newsTitle = ref("");
  //   const loadEvent = async () => {
  //     try {
  //       const response = await EventAPI.getNews();
  //       newsTitle.value = response.data.todo;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   loadEvent();

  //   return {
  //     newsTitle,
  //   };
  // },
};
</script>

<style>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid rgb(31, 31, 31);
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.5);
}

.event-link {
  text-decoration: none;
  color: black;
}
.event-link:hover {
  opacity: 0.88;
}
</style>
