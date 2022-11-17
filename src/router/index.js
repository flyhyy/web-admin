import { createRouter, createWebHistory } from 'vue-router'
import { storeToRefs } from 'pinia'

import PageLogin from '../pages/login/index.vue'
import PageNotFound from '../pages/404/index.vue'
import { useLoginInfoStore } from '../stores/login'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: PageLogin
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: PageNotFound
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

router.beforeEach((to, from, next) => {
  let loginStore = useLoginInfoStore()
  let  {token} =  loginStore.LoginData
  // if()
  next()
  
  console.log("打印----> ~ file: index.js ~ line 39 ~ router.beforeEach ~ val", token)
  

})

export default router
