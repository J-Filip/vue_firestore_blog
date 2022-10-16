<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag.id"> #{{ tag }} </span>
  </div>
</template>

<script setup>
const props = defineProps({
  post: String,
});

// tutorial koristi computed, vjv ce trebat kasnije, ne vidim zasto bi tu trebalo.
const snippet = `${props.post.body.substring(0, 100)} ... `;

</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
  line-height: 1.9rem;
  max-width: 800px;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h3::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: #02bac74f;
  position: absolute;
  z-index: 1;
  padding-right: 40px;
  left: -30px;
  border-radius: 10px;
}
</style>
