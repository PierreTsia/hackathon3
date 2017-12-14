<template>
  <div id="app">
    <app-ajout></app-ajout>
    <app-test></app-test>
    <h2>this is app</h2>
   
    
    <router-view/>
  </div>
</template>



<script>
import ajout from './components/ajout.vue'
import test from './components/test.vue'

export default {
  components: {
    'app-ajout': ajout,
    'app-test': test
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
