import { ref } from '@vue/reactivity';

// dohvaćamo sve tagove.
export function getTags(posts) {
  let tags = [];

  // koristimo Set jer ne prima duplikate.
  const tagSet = new Set();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagSet.add(tag);
    });
  });
  console.log(tagSet);

  // Spread syntax "expands" an array into its elements.
  tags = [...tagSet];

  return {
    tags,
  };
}
