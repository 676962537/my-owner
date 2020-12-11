<template>
  <div id="app">
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

  }
</script>

<style scoped>

</style>
