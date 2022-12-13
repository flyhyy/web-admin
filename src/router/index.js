import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { storeToRefs } from 'pinia'

import PageLogin from '../pages/login/index.vue'
import PageNotFound from '../pages/404/index.vue'
import { useLoginInfoStore } from '../stores/login'
import { LoginSuccessedRoutes } from './router'
import { getToken } from '../utils/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history:createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: PageLogin
    },

    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'NotFound',
    //   component: PageNotFound,
    // },
  ]

})


const whiteRouterList = ['/login',]

let isAdd = false
function addRouter() {
  for (let i of LoginSuccessedRoutes) {
    router.addRoute(i);
  }
  isAdd = true
}

router.beforeEach((to, from, next) => {
  const hasToken = getToken() 
  if (hasToken) {
    if (to.path === '/login') {
      next()
    } else {
      if (useLoginInfoStore().Routes.length) {
        next()
      } else {
        // addRouter()
        useLoginInfoStore().setAddRoutes()
        

        next({ ...to, replace: true })
      }
    }
  } else {
    if (whiteRouterList.indexOf(to.path) != -1) {
      next()
    } else {
      next('/login')
    }
  }

})

export default router
