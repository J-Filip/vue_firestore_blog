<template>
  <div class="home">
    <h1>Home</h1>

    <p ref="par">My name is {{ name }} and I am {{ age }} years old.</p>
    <!-- <button @click='handleClick(age)'>CLICK ME</button> -->
    <button @click="age++">Add a year</button>
    <input type="text" v-model="name" />
    <input type="text" v-model="age" />

    <h2>ninjaaaaaaaaaas</h2>

    <h3>ref</h3>
    <p>{{ ninjaOne.name }} -- {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update 1</button>
    
    <h3>reactive</h3>
    <p>{{ ninjaTwo.name }} -- {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update 2</button>

      <h2>names</h2>
      <input type="text" v-model="search">
      <p> Search term: {{search}}</p>
    <h3 v-for="name in matchingNames" :key="name"> {{name}}</h3>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { computed, watch, watchEffect } from '@vue/runtime-core';
export default {
  name: 'Home',

  // order of execution
  setup() {
    console.log('setup');

    // ne može se koristiti prije nego se komponenta mounta (može u click eventu jer je tad već povezan (referenciran) s elementom)).
    const par = ref(null);

    const name = ref('djoni');
    const age = ref(55);

    const handleClick = () => {
      console.log(par.value);
      name.value = 'Kikiriki';
      age.value = 12;
    };

      // ref and reactive.
    const ninjaOne = ref({ name: '1', age: 22 });
    const ninjaTwo = reactive({ name: '2', age: 44 });

    let updateNinjaOne = () => {
      ninjaOne.value.name = 'Ref';
      ninjaOne.value.age = 33;
    };

      // kad koristimo reactive, imamo direktan pristup objektu (ne moramo koristiti value).
    let updateNinjaTwo = () => {
      ninjaTwo.name = 'Reactive';
      ninjaTwo.age = 11;
    };

    // computed properties.
      const search = ref('')
    const names = ref(['Ivica', 'Marica', 'Crvenkapica'])

    watch(search, (search, prevSearch) => {
            console.log(prevSearch);
    })

    watchEffect(() => {
            console.log('watchEffect ran', search.value);
    })
    
    const matchingNames = computed(() => {
      return names.value.filter((name) => {
            return name.includes(search.value)
      })
    })

    return {
      name,
      age,
      par,
      ninjaOne,
      ninjaTwo,
      updateNinjaOne,
      updateNinjaTwo,
      handleClick,
      search,
      names,
      matchingNames,
    };
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
};
</script>

<style></style>
