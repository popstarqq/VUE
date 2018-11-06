import Vue from 'vue'
import App from './APP.vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 2
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
store.commit('increment');   //count=3
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
