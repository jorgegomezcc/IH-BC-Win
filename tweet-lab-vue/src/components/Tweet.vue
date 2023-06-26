<script setup>

defineProps({
    tweet: {
      type: Object,
      required: true,
      
    }
  });

import actions from "./Actions.vue";
import message from "./Message.vue";
import timestamp from "./Timestamp.vue";
import user from "./User.vue";
import profileimage from "./ProfileImage.vue";

</script>

<template>
    <div class="tweet">

      <!-- Aquí va la imagen de perfil del tweet -->
      <profileimage :image="tweet.user.image"/>

      <div class="body">
        <div class="top">

          <!-- Aquí va el User info del tweet -->
          <user 
          :userName="tweet.user.name" 
          :userHandle="tweet.user.handle"
          />
          <!-- Aquí va el Timestamp del tweet -->
          <timestamp :timestamp="tweet.timestamp"/>

        </div> 

        <!-- Aquí va el mensaje del tweet -->
        <message :message="tweet.message"/>
        <!-- Aquí van los Iconos "actions" -->
        <actions />
        
      </div>
  
      <i class="fas fa-ellipsis-h"></i>
    </div>
  </template>
  
  <style scoped>
  a {
    color: #42b983;
  }
  </style>