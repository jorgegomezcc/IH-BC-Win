<script setup>

const colorChange = () => {
    const buttonColorChange = document.querySelector(".button-blue");
    buttonColorChange.classList.toggle("button-red");
}

</script>

<template >

    <div class="container-button">
        <button class="button-blue" @click="colorChange()">Click para cambiar de color!</button>
    </div>
    
</template>

<style scoped>
</style>