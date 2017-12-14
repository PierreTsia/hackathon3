<template>
  <div id="app">
    <h1>CG PRO</h1>

    <app-patrimoine></app-patrimoine>
    <app-model></app-model>
    <app-charts></app-charts>
    <app-simulation></app-simulation>

    
    <router-view/>
  </div>
</template>


<script>

import patrimoine from './components/patrimoine.vue'
import model from './components/model.vue'
import charts from './components/charts.vue'
import simulation from './components/simulation.vue'

export default {
  components: {
    'app-patrimoine': patrimoine,
    'app-model': model,
    'app-charts': charts,
    'app-simulation': simulation
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
