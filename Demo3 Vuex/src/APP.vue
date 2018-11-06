<template>
  <div class="app">
    <h1>welcome to xiaobai</h1>
    <div style="float:left;width:150px;height:200px;margin-right:10px;background-color:gray;">
      <child1-com></child1-com>
    </div>
    <div style="float:left;width:150px;height:200px;background-color:gray;">
      <child2-com></child2-com>
    </div>
  </div>
</template>

<script>
  import child1 from './components/child1.vue'
  import child2 from './components/child2.vue'
  export default {
    name: 'App',
    data () {
       return{}
    },
    components:{
      'child1-com':child1,
      'child2-com':child2
    }
  }
</script>

<style>
</style>

