import { ref } from 'vue'
import { defineStore } from 'pinia'

export const cityStore = defineStore('counter', () => {
  let years = ref(12)
  let ciudad = ref("Bucaramanga. Colombia")
  let fechaFundacion = ref ("22 de Diciembre de 1622");
  const sumaDos = () => {years.value += 2}
  const porCuatro = () => (years.value *= 4)

  return { years, sumaDos, porCuatro, fechaFundacion, ciudad }
})
