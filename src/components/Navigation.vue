<template lang="html">
  <div>
    <div class="hamburger uk-hidden@s uk-tile uk-tile-muted uk-box-shadow-medium">
      <span @click="showMobile = !showMobile" uk-icon="icon: menu; ratio: 2;"></span>
      <h2 class="uk-heading-bullet uk-align-right uk-display-inline">VN</h2>
    </div>

    <transition appear
    name="custom-classes-transition"
    enter-active-class="animated fadeInLeft"
    leave-active-class="animated zoomOut"
    mode="out-in"
    >
    <div class="nav uk-box-shadow-large uk-visible@s">
      <div class="uk-card uk-text-center">
        <div class="uk-card-body">
          <h1 class="uk-heading-bullet">VN</h1>
          <p>Vytautas Narkevičius</p>
        </div>
      </div>
      <div class="uk-text-center" @click="$emit('clicked')">
        <router-link :to="item.link" tag="div" class="nav-item" v-for="item in items" :key="item.title" exact>
          <i :class="`fa fa-${item.icon} fa-2x`" aria-hidden="true"></i>
          <p class="uk-padding-remove uk-margin-remove">{{ item.title }}</p>
        </router-link>
      </div>
    </div>
  </transition>

  <transition
  name="custom-classes-transition"
  enter-active-class="animated fadeInLeft"
  leave-active-class="animated fadeOutLeft"
  mode="out-in"
  >
  <div class="nav uk-box-shadow-xlarge" v-if="showMobile">
    <div class="uk-text-center" @click="showMobile = !showMobile">
      <router-link :to="item.link" tag="div" class="nav-item" v-for="item in items" :key="item.title" exact>
        <i :class="`fa fa-${item.icon} fa-2x`" aria-hidden="true"></i>
        <p class="uk-padding-remove uk-margin-remove">{{ item.title }}</p>
      </router-link>
    </div>
  </div>
</transition>
</div>
</template>

<script>
export default {
  props: ['show'],

  data() {
    return {
      showMobile: false,
      items: [
        {
          link: '/',
          title: 'Pagrindinis',
          icon: 'home'
        },
        {
          link: '/about',
          title: 'Apie mane',
          icon: 'user'
        },
        {
          link: '/resume',
          title: 'Resume',
          icon: 'history'
        },
        {
          link: '/portfolio',
          title: 'Portfolio',
          icon: 'briefcase'
        },
        {
          link: '/contact',
          title: 'Kontaktai',
          icon: 'envelope-o'
        },

      ],
    }
  },
}
</script>

<style lang="css" scoped>
  .hamburger {
    padding: 8px;
    opacity: 1;
    /*position: fixed;
    top: 0; left: 0;*/
    z-index: 19;
  }

.nav {
  background-color: #fff;
  position: fixed;
  top: 0; left: 0;
  width: 160px;
  height: 100vh;
  z-index: 20;
  overflow-y: auto;
}

.nav-item {
  padding: 16px 0 16px 3px;
  transition: all 0.2s linear;
  border-right: 3px solid white;
  border-bottom: 1px solid #e1e1e1;
  cursor: pointer;
  opacity: 0.5;
}

.nav-item i {
  color: #1e9edf;
}

.router-link-exact-active {
  opacity: 1 !important;
  border-right-color: #1e9edf !important;
  color: #000 !important;
}

.nav-item:hover {
  opacity: 1;
  border-right-color: #1e9edf;
  color: #000;
}

.nav-item:first-of-type {
  border-top: 1px solid #e1e1e1;

}
</style>
