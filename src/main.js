import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VeeValidate);

import { routes } from './routes'; // importa as rotas do arquivo de rotas

const router = new VueRouter({ // instancia novo objeto de Router e passa router como parametro
  routes : routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
