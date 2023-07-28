<script setup>
import { ref, reactive } from "vue";

const musicalPosts = ref([
  {
    id: 1,
    band: "Red Hot Chilli Peppers",
    musicalGenre: "Funk Rock",
    bestSong: "Californication",
  },
  {
    id: 2,
    band: "Rage Against The Machine",
    musicalGenre: "Rap Metal",
    bestSong: "Killing in the name",
  },
  {
    id: 3,
    band: "The Strokes",
    musicalGenre: "Indie Garage Rock",
    bestSong: "Last Nite",
  },
]);
</script>

<template>
  <ul class="list-music-band">
    <li v-for="musicalPost in musicalPosts" :key="musicalPost.id">
      <div>
        <h5>Band</h5>
        <h2>{{ musicalPost.band }}</h2>
      </div>
      <div>
        <h5>Music Genre</h5>
        <h3>{{ musicalPost.musicalGenre }}</h3>
      </div>
      <div>
        <h5>Best Song</h5>
        <h4>{{ musicalPost.bestSong }}</h4>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>