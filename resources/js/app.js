
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue';
import Form from 'vform'
import {AlertError, AlertErrors, AlertSuccess} from 'vform/src/components/bootstrap5'
import HasError from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertErrors.name, AlertErrors)
Vue.component(AlertSuccess.name, AlertSuccess)


import vueFilterDateFormatEsm from 'vue-filter-date-format';
import VueProgressBar from 'vue-progressbar'

import VueRouter from 'vue-router'

import Dashboard from './components/Dashboard'
import Products from './components/Products'
import Profile from './components/Profile'
import Suppliers from './components/Suppliers'
import Staff from './components/Staff'

import Swal from 'sweetalert2'
window.Swal = Swal;

const toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.toast = toast;

// CommonJS


Vue.use(vueFilterDateFormatEsm)
Vue.use(VueRouter)

const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/products', component: Products },
    { path: '/staff', component: Staff },
    { path: '/suppliers', component: Suppliers },
    { path: '/profile', component: Profile }
  ]

  const router = new VueRouter({
    mode:'history',
    routes // short for `routes: routes`
  })

  Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
  })


Vue.use(VueProgressBar, {
  color: 'rbg(143, 255,199)',
  failedColor:'red',
  height: '3px'

})




window.Fire = new Vue();

window.Fire = Fire;










/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
