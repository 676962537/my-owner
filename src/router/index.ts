import Vue from "vue";
import Router from 'vue-router'
Vue.use(Router);
let Index = () => import(/* webpackChunkName:'index' */ '../components/index.vue');
let About = () => import(/* webpackChunkName:'about' */ '../components/about.vue');
let Infinite = () => import(/* webpackChunkName:'infinite' */ '../components/infinite.vue');
let Lazyload = () => import(/* webpackChunkName:'lazyload' */ '../components/lazyload.vue');
let router = new Router({
  mode: 'hash',
  routes: [
    {
      path:"/index",
      name:"index",
      component: Index
    },
    {
      path:"/about",
      name:"about",
      component: About
    },
    {
      path:"/infinite",
      name:"infinite",
      component: Infinite
    },
    {
      path:"/lazyload",
      name:"lazyload",
      component: Lazyload
    }
  ]
});
export default router;
