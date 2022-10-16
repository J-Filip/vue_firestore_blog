<template>
  <Navbar />

  <!-- router-view will display the component that corresponds to the url. 
You can put it anywhere to adapt it to your layout. -->
  <router-view />
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style></style>
