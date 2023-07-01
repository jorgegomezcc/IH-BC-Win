<template>
  <div class="about">
    <div>

    <p>Soy de: {{ ciudad }} </p>
    <p>Fecha de fundación: {{ fundacion }} </p>
    <p>Años pasados: {{ cityStore().years}} </p>
    <button @click="suma()">Sumar 2 años</button>
    <button @click="porCuatro()">Multiplicar por 4</button>
    
  </div>
  </div>
</template>

<script setup>
import { cityStore } from '../stores/counter'

let ciudad = cityStore().ciudad;
let fundacion = cityStore().fechaFundacion; 
let porCuatro = cityStore().porCuatro;
let suma = cityStore().sumaDos;

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
