
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './APP.vue'

Vue.use(VueRouter);
// 1. 定义组件。
const home = { template: '<div>home</div>' }
const about = { template: '<div>about</div>' }

// 2. 定义路由
const routesobj = [
    { path: '/', component: home },
    { path: '/about', component: about }
]

const router=new VueRouter({
  routes:routesobj
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
