<script setup>

defineProps ({
    message: {
        type: String,
        default: "Mensaje por defecto en caso de no recibir ninguna informacion",
    },
});

</script>

<template>

    <p class="message" >
        {{ message }}
    </p>

</template>

<style scoped>
</style>