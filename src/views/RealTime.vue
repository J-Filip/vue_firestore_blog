<template>
  <div class="home">
    <h1>Real-time data:</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { projectFirestore } from '../firebase/config';

import PostList from '../components/PostList.vue';

const posts = ref([]);

projectFirestore
  .collection('posts')
  .orderBy('createdAt', 'desc')
  .onSnapshot((snap) => {
    let docs = snap.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    posts.value = docs;
  });
</script>

<style></style>
