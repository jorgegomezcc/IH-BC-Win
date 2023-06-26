<script setup>

defineProps ({
    timestamp: {
        type: String,
        default: "Date undefined",
    },
});

</script>

<template>

{{ timestamp }}

</template>

<style scoped>
</style>