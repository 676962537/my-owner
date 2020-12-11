<template>
    <div>
        <img v-for="item in dataList" class="lazy-loaded" src="" data-src="http://ali2.a.yximgs.com/upic/2020/06/28/16/BMjAyMDA2MjgxNjI0NTZfMTgxNDAxMTBfMzEzNzEyNTIwOThfMV8z_B1637ac3a269143c4617bcede70cbeadf.jpg" alt="">
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Watch, Prop, Emit} from 'vue-property-decorator';
    import {getName} from '@/util/index'
    import _ from 'lodash'
    @Component({

    })
    export default class Infinite extends Vue{
        private dataList:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        private async mounted(){
            function query(selector) {
                return Array.from(document.querySelectorAll(selector));
            }
            var observer = new IntersectionObserver(
                function(changes) {
                    changes.forEach(function(change) {
                        if(!change.isIntersecting){
                            return;
                        }
                        var container = change.target;
                        container.setAttribute('src',container.getAttribute('data-src'))
                        observer.unobserve(container);
                    });
                }
            );

            query('.lazy-loaded').forEach(function (item) {
                observer.observe(item);
            });
        }
        private getData(){

        }
    }
</script>
<style scoped lang="less">
    img{
        height: 90px;
        width: 100%;
        object-fit: cover;
    }
    #footer{
        background: red;
        height: 30px;
        width: 100%;
    }
</style>
