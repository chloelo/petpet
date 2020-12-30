import Vue from 'vue';
import 'bootstrap';
import $ from 'jquery';
import App from './App.vue';
import router from './router';

window.$ = $;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
