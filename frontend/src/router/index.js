import Vue from 'vue'
import VueRouter from 'vue-router'
import MemoList from '../views/MemoList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MemoList
  },
  {
    path: '/page/:id',
    name: 'page',
    component: function () {
      return import('../views/PageView.vue')
    }
  },
  {
    path: '/write',
    name: 'write',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/WriteForm.vue')
    }
  },
  {
    // 수정페이지 추가
    path: '/updateform/:id',
    name: 'updateform',
    component: function () {
      return import('../views/UpdateForm.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
