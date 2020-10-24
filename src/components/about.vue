<template>
    <div class="about">about</div>
</template>
<script lang="ts">
    import {Component, Vue, Watch, Prop, Emit} from 'vue-property-decorator';
    import {getName} from '@/util/index'
    @Component({

    })
    export default class About extends Vue{
        private mounted(){
            getName('about')
        }
    }
</script>
<style scoped lang="less">
    .about{
        color: green;
    }
</style>