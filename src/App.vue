<template>
  <div id="app">
    <h1>CG PRO</h1>

    <app-patrimoine></app-patrimoine>
    <app-model></app-model>
    <app-charts></app-charts>
    
    <router-view/>
  </div>
</template>


<script>

import patrimoine from './components/patrimoine.vue'
import model from './components/model.vue'
import charts from './components/charts.vue'

export default {
  components: {
    'app-patrimoine': patrimoine,
    'app-model': model,
    'app-charts': charts
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
