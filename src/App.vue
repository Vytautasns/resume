<template>
  <div>
    <Navigation></Navigation>

    <div class="uk-container">

      <transition appear
       name="slide-fade"
       mode="out-in">

        <router-view class="fix"></router-view>

      </transition>

    </div>

  </div>
</template>

<script>
export default {
  components: {
    Navigation: require('./components/Navigation.vue'),
  },

  data() {
    return {
    }
  },
  mounted() {


  },
}
</script>

<style lang="scss">
 @import "./assets/sass/app.scss"
</style>
