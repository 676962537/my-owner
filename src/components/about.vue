<template>
    <div class="banner">
        <div id="box" class="box">
            <div class="sub-box" id="mahenan"></div>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Watch, Prop, Emit} from 'vue-property-decorator';
    import {getName} from '@/util/index'
    @Component({

    })
    export default class About extends Vue{
        private mounted(){
            const callback = ([params]: any) => {
                console.log(params);
                // if (params.intersectionRatio < 1) {
                //     console.log('intersectionRatio < 1');
                // } else {
                //     console.log('intersectionRatio >= 1');
                // }
            };
            const rootMargin = `0px 0px 0px 0px`;
            const io = new IntersectionObserver(callback, {
                threshold: [1],
                // root:document.getElementById('box'),
                rootMargin,
            });
            const el: any = document.getElementById('box');
            el && io.observe(el);


            const aaa = () => {
                return new Promise(((resolve, reject) => {
                    setTimeout(() => {
                        console.log(4444)
                        resolve(1)
                    },0)
                }))
            };

            console.log(111);
            setTimeout(async () => {
                console.log(333);
                let res = await aaa();
                console.log("res:",res);
            },0)
            console.log(22222);
        }
    }
</script>
<style scoped lang="less">
    .banner{
        height: 2000px;
        width: 100%;
        .box{
            margin-top: 1000px;
            height: 200px;
            width: 100%;
            background: red;
            overflow: scroll;
            .sub-box{
                width: 100%;
                height: 100px;
                background: green;
                margin: 600px 0;
            }
        }
    }
</style>