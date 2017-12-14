<template>
  <div id="app">
    <app-ajout></app-ajout>
    <h2>this is app</h2>
   
    
    <router-view/>
  </div>
</template>



<script>
import ajout from './components/ajout.vue'

export default {
  components: {
    'app-ajout': ajout
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
