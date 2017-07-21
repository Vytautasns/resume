<template lang="html">
<div class="uk-card">
  <div @click="$router.push('/about')" class="uk-position-center uk-text-center uk-padding-small cursor">
      <h1 class="uk-heading-primary uk-margin-remove uk-text-primary">
        Vytautas Narkevičius.
      </h1>
      <span class="uk-text-lead uk-margin-remove"><em>Web</em> programuotojas</span>
  </div>
</div>
</template>
<script>

export default {
  data() {
    return {
    }
  },

   created () {

     },

   methods: {
     change() {
       alert(true);
     }

   },

}
</script>

<style lang="css" scoped>
  .cursor {
    cursor: pointer;
  }
</style>
