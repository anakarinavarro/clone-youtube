<template>
  <v-layout row>
    <v-col cols="12" sm="3" v-for="(video, $index) of videos" :key="$index">
      <DashboardCard :item="video" />
    </v-col>
  </v-layout>
</template>

<script>
import DashboardCard from "@/components/DashboardCard.vue";
import { mapState } from "vuex";
import Store from "@/store/";

export default {
  components: { DashboardCard },
  beforeRouteEnter(to, from, next) {
    Store.dispatch("videos/getAllVideos");
    next();
  },
  computed: {
    ...mapState("videos", {
      videos: (state) => state.videos,
    }),
  },
};
</script>

<style></style>
