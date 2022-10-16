import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import SinglePost from './components/SinglePost.vue';

// Importing the global css file.
import './assets/global.less';


// stvaramo instancu aplikacije s ovom funkcijom i argument je root komponenta koja sadrži sve ostale komponente. 
const app = createApp(App);

// TEST: resgistracija globalnih komponenti, moguće koristiti bilo gdje u apk. bez importanja.
app.component('SinglePost', SinglePost);


// instancu aplikacije moramo mountati, ova metoda očekuje DOM container. 
// mount - runtime renderer prolazi kroz virtual dom tree i gradi pravi dom tree.
// diffing - izjednačavanje razlika između virtualnog i pravog dom treea.
// return value je instanca root komponente ove instance aplikacije.
app.use(router).mount('#app');
