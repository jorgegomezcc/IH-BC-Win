<script setup>
import { ref, reactive } from "vue";

const boolean = ref(true);
</script>

<template>
  <div class="boolean-variable">
    <h2 v-if="boolean">Texto visible (true)</h2>
    <h2 v-else>Texto no visible</h2>
  </div>
</template>

<style scoped></style>