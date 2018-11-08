import Vue from 'vue'
import App from './APP.vue'
import Vuex from 'vuex'
import types from './mutation-types'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 2
  },
  mutations: {
    increment (state) {
      state.count++
    },
    increment1 (state,payload){
      state.count+=payload.amount;
    }
   /*  
    [types.mutationFn1] (state) {
      state.count--
    },
    [types.mutationFn2] (state,payload){
      state.count+=payload.amount;
    },
    [types.mutationFn3](state,payload){
      state.count+=payload.amount;
    } */
  }
})
/* store.commit('incrementpayload',{
  amount:10
});  */     
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
