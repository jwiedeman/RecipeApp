// main.js

import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import Create from './components/Create.vue';
import Index from './components/Index.vue';
import Edit from './components/Edit.vue';
import Contact from './components/Contact.vue';
import ForgotPassword from './components/account/ForgotPassword.vue';
import Login from './components/account/Login.vue';
import Profile from './components/account/Profile.vue';
import Reset from './components/account/Reset.vue';
import SignUp from './components/account/SignUp.vue';


const routes = [
  {
      name: 'home',
      path: '/',
      component: Index
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact
},
  {
      name: 'create',
      path: '/create',
      component: Create
  },
  {
      name: 'posts',
      path: '/posts',
      component: Index
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: Edit
  },
  {
    name: 'signup',
    path: '/signup',
    component: SignUp
},
{
    name: 'Profile',
    path: '/Profile',
    component: Profile
},
{
    name: 'Login',
    path: '/Login',
    component: Login
},
{
    name: 'ForgotPassword',
    path: '/ForgotPassword',
    component: ForgotPassword
},
  
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');