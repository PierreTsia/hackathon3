<template>
  <div id="app">
    <div class="container-fluid">
      <h1>CG PRO</h1>
    </div>
    <app-patrimoine></app-patrimoine>
    <app-model></app-model>
    <app-charts></app-charts>
<<<<<<< HEAD
    <app-simulation></app-simulation>

    
=======
  
>>>>>>> master
    <router-view/>
  </div>
</template>


<script>
<<<<<<< HEAD

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

=======
  import patrimoine from './components/patrimoine.vue'
  import model from './components/model.vue'
  import charts from './components/charts.vue'
  
  export default {
    components: {
      'app-patrimoine': patrimoine,
      'app-model': model,
      'app-charts': charts
    },
    data() {
      return {
  
      }
    },
    methods: {
  
>>>>>>> master
    }
  }
</script>



<style>
  body {
    margin: 0;
  }
  
  h2,
  h1,
  h3,
  h4 {
    font-family: 'Exo 2', sans-serif;
  }
  
  h1 {
    font-size: 60px;
    text-align: center;
    font-weight: bold;
    color: white;
    background-color: #00ADD4;
    padding: 30px;
  }

  .container-fluid {
    padding: 0;
  }
</style>
