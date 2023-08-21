import { createRouter,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import InformationView from '../views/InformationView.vue'
import ServiceView from '../views/ServiceView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/information',
    name: 'information',
    component: InformationView
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history:createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const target = {
    top: 0,
    left: 0,
    behavior: 'smooth',
  }
  document.querySelector('#main').scrollTo(target)
  next()
})

// router.beforeResolve(async () => {
// })

// router.afterEach(() => {
// })

export default router
