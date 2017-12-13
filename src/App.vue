<template>


  <div id="app">
    <test></test>
    <h2>this is app</h2>
   
    
    <router-view/>
  </div>
  


</template>



<script>
import Test from './components/test.vue'

export default {
  name: 'app', 
  components: {
            'test': Test
        }
}

</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
