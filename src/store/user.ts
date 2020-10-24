export default {
  namespaced:true,
  state:{
    name:'user-state'
  },
  mutations:{
    changeName(state){
      console.log("user/changeName")
      state.name = 'changeName-user-state'
    }
  },
  actions:{
    getData(){
      return new Promise(((resolve, reject) => {
        console.log("user/getData");
        setTimeout(() => {
          resolve([1,2,3,4,5,6]);
        },5000)
      }))
    }
  },
  getters: {
    gettersName(state){
      return `${state.name}--getters`;
    }
  }
}
