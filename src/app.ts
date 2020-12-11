import App from "./App.vue";
import router from "./router/index"
import store from "./store/index2"
import "./app.css";
import {Component,Vue} from "vue-property-decorator"

// 注册组件内路由守卫
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate'
]);
// getName('app');
// import(/* webpackChunkName: 'utils' */'@/util/index').then((res) => {
//     res.getName('app');
// })

Vue.directive('color',{
    inserted(el){
        el.style.color = 'red';
        el.style.fontSize = '20px';
    }
});

new Vue({
    router,
    store,
    render:h => h(App)
}).$mount("#app");
