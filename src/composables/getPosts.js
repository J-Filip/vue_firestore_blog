import { ref } from '@vue/reactivity';
import { projectFirestore } from '../firebase/config';

// dohvaćamo sve postove.
export function getPosts() {
  const posts = ref([]);
  const fetchError = ref(null);

  const load = async () => {
    try {
      const response = await projectFirestore.collection("posts").orderBy("createdAt", "asc").get()

      posts.value = response.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id
        }

      });
      console.log(posts.value);
    } catch (error) {
      console.log(error);
      fetchError.value = error.message;
    }
  };

  return {
    posts,
    fetchError,
    load,
  };
}
