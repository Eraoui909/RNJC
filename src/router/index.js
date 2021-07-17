import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from "@/views/ContactUs";
import Argumentaire from "@/views/Argumentaire";
import EquipeDuColloque from "@/views/EquipeDuColloque";
import Calendrier from "@/views/Calendrier";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactUs
  },
  {
    path: '/argumentaire',
    name: 'Argumentaire',
    component: Argumentaire
  },
  {
    path: '/equipe-du-colloque',
    name: 'equipe-du-colloque',
    component: EquipeDuColloque
  },
  {
    path: '/calendrier',
    name: 'Calendrier',
    component: Calendrier
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
