<template>
    <div>
        <h1>{{title}}</h1>
        <h2>{{count()}}</h2>
        <Button @click="change">改变count</Button>
    </div>
</template>
<script>
export default{
    name:'child1',
    data(){
        return{
            title:'子组件1'
        }
    }, 
    methods:{
         count(){
          return this.$store.state.count +20  
        },
        change(){
            this.$store.commit('increment');
        }
    }
}
</script>
