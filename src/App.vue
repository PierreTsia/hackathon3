<template>
  <div id="app">
    <app-ajout></app-ajout>
    <test></test>
    <h2>this is app</h2>
   
    
    <router-view/>
 
</template>



<script>
import ajout from './components/ajout.vue'
import listeModel from './components/listeModel.vue'

export default {
  components: {
    'app-ajout': ajout,
    'app-listeModel': listeModel,
    'test': Test
  },
  name: 'app',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>



<style>
  body {
    margin: 0;
  }
</style>
