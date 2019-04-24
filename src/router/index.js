import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/page/home'),
      children: [
       {
      path: '/test',
      name: 'First',
      component: () => import('@/page/first/test')
    }
      ]
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/page/404')
    },
    
  ]
})
