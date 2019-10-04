import Vue from 'vue';
import VueRouter from 'vue-router';
import ListView from '../views/ListView.vue';
import MovieView from '../views/MovieView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/movies',
    },
    {
      path: '/movies',
      name: 'movies',
      component: ListView,
      beforeEnter: (to, from, next) => {
        next();
      },
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: MovieView,
      beforeEnter: (to, from, next) => {
        next();
      },
    },
  ],
});
