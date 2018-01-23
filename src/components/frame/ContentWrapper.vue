<template>
  <div class="content-wrapper">
    <section class="content-header">
      <!--<h1>
        Page Header
        <small>Optional description</small>
      </h1>-->
      <ol class="breadcrumb">
        <li><a href="/#/Main"><i class="fa fa-home"></i> 首页</a></li>
        <router-link tag="li" :data="secondLink" :to="secondLink.router" v-if="secondLink.router && (secondLink.router.path || secondLink.router.name)">
          <a>
            <i :class="secondLink.icon"> {{ secondLink.name }}</i>
          </a>
        </router-link>
        <li v-else v-show="secondLink.link">
          <a :href="secondLink.link">
            <i :class="secondLink.icon"> {{ secondLink.name }}</i>
          </a>
        </li>

        <router-link tag="li" class="active" :data="thirdLink" :to="thirdLink.router" v-if="thirdLink.router && (thirdLink.router.path || thirdLink.router.name)">
          <a>
            <i :class="thirdLink.icon"> {{ thirdLink.name }}</i>
          </a>
        </router-link>
        <li v-else v-show="thirdLink.link">
          <a :href="thirdLink.link">
            <i :class="thirdLink.icon"> {{ thirdLink.name }}</i>
          </a>
        </li>
      </ol>
    </section>
    <!-- Main content -->
    <section class="content container-fluid">
      <transition name="page" mode="out-in">
        <router-view/>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: 'content-wrapper',
  props: {
    secondLink: {
      type: Object,
      default () {
        return {}
      }
    },
    thirdLink: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .page-enter-active, .page-leave-active {
    transition: opacity 0.5s, transform 0.5s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }
</style>
