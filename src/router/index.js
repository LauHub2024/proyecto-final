import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import How from '../views/How.vue'
import List from '../views/List.vue'
import Despensa from '../views/Despensa.vue'
import Recetas from '../views/Recetas.vue'
import Automatic from '../views/Automatic.vue'
import Compartir from '../views/Compartir.vue'
import Vence from '../views/Vence.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/login', component: Login },
  { path: '/how', component: How },
  { path: '/list', component: List },
  { path: '/despensa', component: Despensa },
  { path: '/recetas', component: Recetas },
  { path: '/automatic', component: Automatic }, 
  { path: '/compartir', component: Compartir },
  { path: '/vence', component: Vence }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router