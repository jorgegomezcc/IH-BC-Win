<script setup>

defineProps ({
    image: {
        type: String,   
    },
});

</script>

<template>

    <img
    :src="image"
    class="profile"
    alt="profile"
    />

</template>

<style scoped>
</style>