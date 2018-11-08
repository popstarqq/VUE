<template>
    <div>
        <h1>{{title}}</h1>
        <h2>{{count}}</h2>
    </div>
</template>
<script>
export default{
    name:'child2',
    data(){
        return{
            title:'子组件2'
        }
    },
    computed:{
        count(){
          return this.$store.state.count+20  //count=23
        }
    }
}
</script>
