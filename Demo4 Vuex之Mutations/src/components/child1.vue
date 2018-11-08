<template>
    <div>
        <h1>{{title}}</h1>
        <h2>{{count()}}</h2>
        <Button @click="change">改变count</Button>
    </div>
</template>
<script>
import types from '../mutation-types'
import { mapMutations } from 'vuex'
export default{
    name:'child1',
    data(){
        return{
            title:'子组件1'
        }
    }, 
    methods:{
        //辅助函数有两种方式
        ...mapMutations([    //辅助函数:这里仅仅用mapMutations中的将this.increment映射为this.$store.commit('increment');
            'increment',
            'increment1'
        ]),
         ...mapMutations({
             delete:[types.mutationFn1],
             add:[types.mutationFn2],
             show:[types.mutationFn3]
         }),
         //普通函数
         count(){
          return this.$store.state.count 
        },
        change(){
            this.increment1({amount:20});
            this.add({amount:20});

            //带有载荷的Mutation函数有两种注册方式
            /*  this.$store.commit([types.mutationFn1],{
                amount:20
            }); */

            /* this.$store.commit({
                type:'incrementpayload',
                amount:20
            }); */
            /* this.$store.commit([types.mutationFn1],20); */        
        }
    }
}
</script>
