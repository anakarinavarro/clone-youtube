<template>
  <v-card max-width="275" flat>
    <v-img class="img-video" :src="item.url"></v-img>

    <v-card-title>{{ item.label }}</v-card-title>

    <v-card-subtitle>{{ item.views }} de vistas • hace {{ item.upload }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.img-video {
  object-fit: cover;
  aspect-ratio: 16/9;
}
</style>
