<template>
  <!-- <h3>Create a new blog:</h3> -->
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label> Title:</label>
      <input v-model="title" type="text" required />
      <label> Content:</label>
      <textarea v-model="body" required />
      <label> Tags (hit enter to confirm):</label>
      <input
        v-model.trim="tag"
        type="text"
        @keydown.enter.prevent="handleKeydown"
      />
      <div class="pill__container">
        TAGS:
        <div
          v-for="tag in tags"
          :key="tag"
          class="pill"
          @click="deleteTag(tag)"
        >
          #{{ tag }}
        </div>
      </div>
      <button>ADD NEW</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { projectFirestore, firestoreTimestamp } from '../firebase/config';

const title = ref('');
const body = ref('');
const tag = ref('');
const tags = ref([]);

const router = useRouter();

const handleKeydown = () => {
  if (!tags.value.includes(tag.value)) {
    tags.value.push(tag.value);
  }
  tag.value = '';
};

const deleteTag = (tagToRemove) => {
  tags.value = tags.value.filter((tag) => {
    return tagToRemove !== tag;
  });
};

const handleSubmit = async () => {
  const newBlog = {
    title: title.value,
    body: body.value,
    tags: tags.value,
    createdAt: firestoreTimestamp()
  };

  // id se dodjeljuje automatski (db.json?)
  try {
    const response = await projectFirestore.collection('posts').add(newBlog);

    // prebacujemo na /home.
    router.push({ name: 'Home' });
  } catch (error) {
    console.log(error);
  }
  //
};
</script>

// ! TODO: koristit classes radi performansi jer svaki scopeani css mora bit
procesuiran posebno.
<style scoped>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: '';
  padding: 4px;
  display: block;
  width: 100%;
  height: 100%;
  background: #d400ff57;
  position: absolute;
  z-index: 1;
  padding-right: 40px;
  left: -10px;
  border-radius: 8px;
}
button {
  display: block;
  margin-top: 50px;
  background: #c300ff;
  color: white;
  border: 3px solid rgb(149, 13, 228);
  border-radius: 12px;
  padding: 10px;
  font-size: 18px;
}

.pill__container {
  margin-top: 15px;
}
.pill {
  display: inline-block;
  margin: 0px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
