<script setup>
import { ref, reactive } from "vue";

let counter = reactive({
  count: 0,
  title: "Contador",
});

const plus = () => {
  counter.count++;
};

const rest = () => {
  counter.count--;
};

let name = ref("Jorge");
let age = ref("33");
let profesion = ref("Informatico");

const stringFunction = () => {
  return `Me llamo ${name.value}, tengo ${age.value} y soy ${profesion.value}`;
};
</script>

<template>
<div>
  <div class="counter">
    <h2>{{ counter.title }}</h2>
    <button @click="plus">+</button>
    <h2>{{ counter.count }}</h2>
    <button @click="rest">-</button>
  </div>
  
  <div class="dom-calculate">
    <h2>Suma directa en el HTML con mustache sintax === { { 2+2 } }</h2>
  <h1>{{ 2 + 2 }}</h1>
  </div>
  
  <div class="function-string">
    <h2>{{ stringFunction() }}</h2>
  </div>
</div>
</template>

<style scoped></style>