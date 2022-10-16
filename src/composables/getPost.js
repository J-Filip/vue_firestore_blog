import { ref } from '@vue/reactivity';
import { projectFirestore } from '../firebase/config';

// dohvaćamo post s određenim id-om.
export function getPost(id) {
  const post = ref(null);
  const fetchError = ref(null);

  const load = async () => {
    try {
      const response = await projectFirestore.collection('posts').doc(id).get();
      if (!response.exists) {
        throw Error('Post does not exist!')
      }
      post.value = {
        ...response.data(),
        id: response.id,
      };
    } catch (error) {
      console.log(error);
      fetchError.value = error.message;
    }
  };

  // expose managed state as return value.
  // Returning a reactive object from a composable will cause such destructures
  // to lose the reactivity connection to the state inside the composable, while the refs will retain that connection.
  return {
    post,
    fetchError,
    load,
  };
}
