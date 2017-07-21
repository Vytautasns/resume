import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',

  routes: [
    //
    // Pages routes
    //**************************************************************************
    {
      path: '/',
      name: 'main',
      component: require('./pages/Landing.vue'),
    },

    {
      path: '/about',
      name: 'about',
      component: require('./pages/About.vue'),
    },

    {
      path: '/resume',
      name: 'resume',
      component: require('./pages/Resume.vue'),
    },

    {
      path: '/contact',
      name: 'contact',
      component: require('./pages/Contacts.vue'),
    },

    {
      path: '/portfolio',
      name: 'portfolio',
      component: require('./pages/Portfolio.vue'),
    },




  ],

  scrollBehavior (to, from, savedPosition) {

    return { x: 0, y: 0 }

  },
})
