<script setup>

defineProps ({
    userName: {
        type: String,
    },
    userHandle: {
        type: String,
    }
});

</script>

<template>

    <span class="user">
        <span class="name">
            {{ userName }}
        </span>
        <span class="handle">
            {{ userHandle }}
        </span>
    </span>

</template>

<style scoped>
</style>