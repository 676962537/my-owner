export default {
  namespaced:true,
  state:{
    name:'chat-state'
  },
  mutations:{
    changeName(state){
      console.log("chat/changeName")
      state.name = 'changeName-chat-state'
    }
  },
  actions:{
    getData({dispatch,state,getters}){
      return new Promise(((resolve, reject) => {
        console.log("chat/getData")
        setTimeout(() => {
          resolve([1,2,3,4,5,6]);
        },5000)
      }))
    }
  },
  getters: {
    gettersName(state,getters,rootState,rootGetters){
      // console.log(state);
      // console.log(getters);
      // console.log(rootState);
      // console.log(rootGetters);
      return `${state.name}--getters`;
    }
  }
}
