import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'about',
      component: HomeView,
      meta: {
        nav: true
      }
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/BlogView.vue'),
      meta: {
        nav: true
      }
    },
    {
      path: '/posts/:id',
      name: 'post',
      props: true,
      component: () => import('../views/BlogPostView.vue'),
      meta: {
        nav: false
      }
    }
  ]
})

export default router
