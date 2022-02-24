<template>
  <div id="app">
    <!--write something no changed-->
    <div>App</div>
    <router-link to="/index">/index</router-link>
    <router-link to="/about">/about</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue, Watch, Prop} from 'vue-property-decorator';
  import {State, Getter, Action, Mutation} from 'vuex-class';
  @Component({
    components:{}
  })
  export default class App extends Vue {
    private mounted(){
      console.log('branch1')
    }
    private created(){
      console.log('branch1')
    }
    private getData(){
      console.log('branch2')
    }
  }
</script>

<style scoped>

</style>
