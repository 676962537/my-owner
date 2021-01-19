<template>
    <div>
        <div class="item" id="scroll" v-for="item in data">
            {{item}}--{{pageIndex}}
        </div>
        <div id="footer">{{pageFlag ? 'loading结束' : 'loading中'}}</div>
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
        private data:number[] = [];
        private pageIndex:number = 0;
        private pageSize:number = 20;
        private pageFlag:boolean = true;


        private async mounted(){
            const fn = () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(1);
                    },2000)
                })
            }
            try{
                const name = await fn();
                console.log(1)
            }catch(e){
                console.log(2)
            }
            console.log(3);

            this.data = this.dataList;
            await this.$nextTick();
            let observer = new IntersectionObserver((([entry]) => {
                console.log(entry);
                if(!entry.isIntersecting) return;
                this.getData();
            }),{
                threshold:[1],
                rootMargin:'0px 0px 0px 0px'
            });
            observer.observe(document.getElementById('footer'))
        }


        private getData(){
            if(!this.pageFlag){
                return;
            }
            this.pageFlag = false;
            setTimeout(() => {
                this.data = this.data.concat(this.dataList);
                this.pageFlag = true;
                this.pageIndex++;
            },1000)
        }
    }
</script>
<style scoped lang="less">
   .item{
       padding: 10px;
       font-size: 14px;
   }
    #footer{
        background: red;
        height: 30px;
        width: 100%;
    }
</style>
