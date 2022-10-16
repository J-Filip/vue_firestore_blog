<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core';

const props = defineProps({
  posts: Array,
});

onMounted(() => {
  console.log('mounted');
});
</script>

<style></style>
