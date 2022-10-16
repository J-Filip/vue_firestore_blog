<template>
  <div v-if="fetchError">
    <p>{{ fetchError }}</p>
  </div>
  <div v-else>
    <div class="post" v-if="post">
      <h3>TITLE: {{ post.title }}</h3>
      <h4> Created: {{post.createdAt.toDate().toLocaleDateString("fr-LU")}}</h4>

      <p class="post__body">
        {{ post.body.replaceAll('\\n', '\n') }}
      </p>
      <button @click="deleteBlog" class="blog__delete">Delete</button>
      <!-- <span v-for="tag in post.tags" :key="tag.id"> #{{ tag }} </span> -->
    </div>
    <div v-else>
      <Skeleton />
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

import { getPost } from '../composables/getPost.js';

import Skeleton from '../components/Skeleton.vue';
import { projectFirestore } from '../firebase/config.js';

const props = defineProps({
  id: String,
});

const router = useRouter();
const route = useRoute();

// const { post, fetchError, load } = getPost(props.id);
// ili ...
const { post, fetchError, load } = getPost(route.params.id);

load();

const deleteBlog = async () => {
  try {
    await projectFirestore.collection('posts').doc(route.params.id).delete();
    // ili
    // await projectFirestore.collection('posts')
    // .doc(props.id)
    // .delete()

    // prebacujemo na /home.
    router.push({ name: 'Home' });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  line-height: 1.5em;
  margin-top: 40px;
}
.post__body {
  white-space: pre-wrap;
}

.blog__delete {
  margin: 10px auto;
  background: rgb(223, 14, 66);
}
</style>
