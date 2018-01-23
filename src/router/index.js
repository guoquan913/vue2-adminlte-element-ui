import Vue from 'vue'
import Router from 'vue-router'
import Login from '../Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: '登录页面',
      component: Login,
      hidden: true
    },
    {
      path: '/',
      name: '主页',
      redirect: '/Main'
    },
    {
      path: '/Main',
      name: 'Main',
      component: resolve => require(['@/views/Main.vue'], resolve)
    },
    {
      path: '/Test',
      name: 'Test',
      component: resolve => require(['@/views/Test.vue'], resolve)
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: resolve => require(['@/views/HelloWorld.vue'], resolve)
    }
  ]
})
