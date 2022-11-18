import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { storeToRefs } from 'pinia'

import PageLogin from '../pages/login/index.vue'
import PageNotFound from '../pages/404/index.vue'
import { useLoginInfoStore } from '../stores/login'
import { LoginInRoutes } from './router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history:createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: PageLogin
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: PageNotFound,

    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export function addRouter() {
  for (let i of LoginInRoutes) {
    router.addRoute(i);
  }
}

router.beforeEach((to, from,next) => {

  
  let loginStore = useLoginInfoStore()
  let { token } = loginStore.LoginData
  console.log(`[log] >>>>>>>>>> ~ router.beforeEach ~ to`, to)
  if (token) {
    if (to.path === '/login') {
      next()
    } else {
      addRouter() 
      next()
    }
  } else {
    next()
    // next('/login')
  }


 


})

export default router
