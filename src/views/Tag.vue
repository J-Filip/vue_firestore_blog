<template>
  <div class="tag">
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <div if class="layout" v-if="posts.length">
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="posts" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';

import { getPosts } from '../composables/getPosts.js';
import { computed } from '@vue/runtime-core';

const route = useRoute();
const { posts, fetchError, load } = getPosts();
load();

// za kompleksnije kalkulacije koristimo computed da ne zatrpamo template.
// returned value is a computed ref.

// In cases where you do not want caching, use a method call instead.
const filteredPosts = computed(() => {
  return posts.value.filter((post) => {
    return post.tags.includes(route.params.tag);
  });
});
</script>

<style scoped>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
