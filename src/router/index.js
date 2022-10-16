
/**
 * Službeni Vue router:
 * 
 * -
 */


import { createRouter, createWebHistory } from 'vue-router';

// importamo home jer je tamo definiran i css.
import Home from '../views/Home.vue';
// import Tag from '../views/Tag.vue';

// ! lazy loading routing

//  Create the router instance and pass the `routes` option
const router = createRouter({
  // HTML5 history mode (preporučeni mode za SPA) - normalni izgled URL-ova.
  history: createWebHistory(),

  // Define some routes
// Each route should map to a component.
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      // component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
    },
    {
      path: '/tag/:tag',
      name: 'Tag',
      // component: Tag,
      component: () => import(/* webpackChunkName: "Tag" */ '../views/Tag.vue'),
      props: true,
    },
    {
      path: '/posts/:id',
      name: 'Details',
      // component: Details,
      component: () =>
        import(/* webpackChunkName: "Details" */ '../views/Details.vue'),
      props: true,
    },
    {
      path: '/create',
      name: 'CreateBlog',
      // component: CreateBlog,
      component: () =>
        import(/* webpackChunkName: "CreateBlog" */ '../views/CreateBlog.vue'),
    },
    {
      path: '/realtime',
      name: 'RealTime',
      // component: RealTime,
      component: () =>
        import(/* webpackChunkName: "RealTime" */ '../views/RealTime.vue'),
    },
  ],
});

export default router;

// ! BASIC ROUTING

// import Home from '../views/Home.vue'
// import CreateBlog from '../views/CreateBlog.vue'
// import Tag from '../views/Tag.vue';
// import Details from '../views/Details.vue';

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//   },
//   {
//     path: '/create',
//     name: 'CreateBlog',
//     component: CreateBlog,
//   },
//   {
//     path: '/tag/:tag',
//     name: 'Tag',
//     component: Tag,
//     props: true,
//   },
//   {
//     path: '/posts/:id',
//     name: 'Details',
//     component: Details,
//     props: true,
//   },
// ];
