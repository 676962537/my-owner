import Vue from "vue";
import vuex from "vuex";
Vue.use(vuex);
import user from "./user";
import chat from "./chat";
let store = new vuex.Store({
  state:{
    name:'common'
  },
  getters:{
    indexName(state){
      return state.name;
    }
  },
  modules:{
    user,chat
  }
});
export default store
