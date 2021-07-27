import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>  import('../views/Home')
  },
  {
    path: '/contact',
    name: 'Contact',
    component:() =>  import('../views/ContactUs')
  },
  {
    path: '/argumentaire',
    name: 'Argumentaire',
    component:() =>   import('../views/Argumentaire')
  },
  {
    path: '/equipe-du-colloque',
    name: 'equipe-du-colloque',
    component: () => import('../views/EquipeDuColloque')
  },
  {
    path: '/calendrier',
    name: 'Calendrier',
    component: () => import('../views/Calendrier')
  },
  {
    path: '/procedure-de-soumission',
    name: 'procedure-de-soumission',
    component: () => import('../views/ProcedureDeSoumission')
  },
  {
    path: '/programme',
    name: 'normes-de-redaction',
    component: () => import('../views/programme')
  },
  {
      path: '/conferenciers',
      name: 'conferenciers',
      component: () => import('../views/conferenciers')
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
