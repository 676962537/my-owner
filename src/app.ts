import App from "./App.vue";
import router from "./router/index"
import store from "./store/index2"
import "./app.css";
import {Component,Vue} from "vue-property-decorator"
// import { getName } from '@/util/index'
import _ from 'lodash'
console.log(_);

// 注册组件内路由守卫
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate'
]);
// getName('app');
import(/* webpackChunkName: 'utils' */'@/util/index').then((res) => {
    res.getName('app');
})
Vue.directive('color',{
    inserted(el){
        el.style.color = 'red';
        el.style.fontSize = '20px';
    }
});

console.log('branch1---c1')
console.log('branch1---c2')

new Vue({
    router,
    store,
    render:h => h(App)
}).$mount("#app");

console.log('branch2-c1')

