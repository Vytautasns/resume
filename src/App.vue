<template>
  <div>
    <div @click="showNav = !showNav" class="hamburger uk-hidden@s uk-tile uk-tile-muted uk-box-shadow-medium">
      <!-- <i class="fa fa-bars fa-2x" aria-hidden="true"></i> -->
      <span uk-icon="icon: menu; ratio: 2;"></span>
      <h2 class="uk-heading-bullet uk-align-right uk-display-inline">VN</h2>
   </div>
    <Navigation :show="true" class="uk-visible@s"></Navigation>
    <Navigation @clicked="showNav = !showNav" :show="showNav"></Navigation>
    <div class="uk-container">
      <transition appear
       name="slide-fade"
       mode="out-in"
       >
        <router-view class="fix"></router-view>
      </transition>
    </div>

  </div>
</template>

<script>
// import Navigation from './components/Navigation';
export default {
  components: {
    Navigation: require('./components/Navigation.vue'),
  },

  data() {
    return {
      showNav: false,
      transition: 'slide',
    }
  },
  mounted() {


  },
}
</script>

<style lang="scss">
 @import "./assets/sass/app.scss"
</style>
