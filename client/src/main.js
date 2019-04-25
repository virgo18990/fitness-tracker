// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import 'bootstrap/scss/bootstrap.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss'
//import '/assets/main.scss';
import './assets/main.scss'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})*/

Vue.use(Vuetify);


new Vue({

  router,
  render: h => h(App)
}).$mount('#app')
