<template>
  <div class="home">
    <div v-if="fetchError">
      <p>{{ fetchError }}</p>
    </div>
    <div v-else>
      <!-- <button @click="showPosts = !showPosts">Toggle posts</button> -->
      <!-- <button @click="posts.pop()">Delete post</button> -->
      <div class="layout" v-if="posts.length">
        <PostList v-if="showPosts" :posts="posts" />
        <TagCloud :posts="posts" />
      </div>
      <div v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script setup>
import PostList from '../components/PostList.vue';
import Spinner from '../components/Spinner.vue';
import TagCloud from '../components/TagCloud.vue';

import { getPosts } from '../composables/getPosts.js';
import { ref } from '@vue/reactivity';

const showPosts = ref(true);

const { posts, fetchError, load } = getPosts();
load();
</script>

<style>
span {
  font-size: 16px;
  color: #02bac7
}

</style>
