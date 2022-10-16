<template>
  <div class="tag-cloud">
    <h3>TAGS:</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'Tag', params: { tag: tag } }">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { getTags } from '../composables/getTags.js';

const props = defineProps({
  posts: Array,
});

const { tags } = getTags(props.posts);
</script>

<style>
.tag-cloud {
  padding: 10px;
}
.tag-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 16px 8px;
  color: #444;
}
.tag-cloud div {
  display: inline-block;
  padding: 10px;
}
.tag-cloud a {
  color: #ccc;
  text-decoration: none;
}
.tag-cloud a.router-link-active {
  color: #06d4e2;
  font-weight: bold;
}
</style>
