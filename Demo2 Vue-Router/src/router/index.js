import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
// 1. 定义（路由）组件。
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
const routes3 = [
    { path: '/home', component: Foo },
    { path: '/about', component: Bar }
]


const router=new VueRouter({
  routes:routes3
});
export default router