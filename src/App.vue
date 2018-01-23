<template>
  <div id="app">
    <div class="wrapper" v-if="!isLoginPage">
      <ad-navibar></ad-navibar>
      <ad-slider :slideMenuItems="slideMenuItems"></ad-slider>
      <ad-content-wrap></ad-content-wrap>
      <ad-footer></ad-footer>
      <div class="control-sidebar-bg"></div>
    </div>
    <div v-else>
      <transition name="page" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from './components/frame/Header'
import Sidebar from './components/frame/Sidebar'
import ContentWrap from './components/frame/ContentWrapper'
import Footer from './components/frame/Footer'
// import store from './vuex/store.js'
// import slideMenuItems from './lib/slideMenuItems.js'
export default {
  name: 'App',
  computed: {
    isLoginPage: function () {
      return false
    }
  },
  data () {
    return {
      slideMenuItems: [
        {
          type: 'item',
          isHeader: true,
          name: '导航菜单'
        },
        {
          type: 'tree',
          icon: 'fa fa-files-o',
          name: '用户管理',
          badge: {
            type: 'Number',
            data: 4
          },
          items: [
            {
              type: 'item',
              icon: 'fa fa-circle-o',
              name: 'Test',
              router: {
                path: '/Test'
              }
            },
            {
              type: 'item',
              icon: 'fa fa-circle-o',
              name: 'Hello',
              link: '/#/Hello'
            }
          ]}
      ]
    }
  },
  created () {
  },
  components: {
    'ad-navibar': Header,
    'ad-slider': Sidebar,
    'ad-content-wrap': ContentWrap,
    'ad-footer': Footer
  }
}
</script>
