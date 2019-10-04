import Vue from 'vue';
import App from './App.vue';
import { router } from './routes';
import { apolloProvider } from './api/index.js';

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
