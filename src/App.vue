<template>
  <div id="app">
    <div class="container-fluid intro">
      <h1>CG PRO</h1>
      <h2>COACH PATRIMONIAL EN LIGNE POUR OPTIMISER ET DÉVELOPPER MON PATRIMOINE EN TOUTE CONFIDENTIALITÉ ET SIMPLICITÉ</h2>
    </div>
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
  h2, h3, h4, p, i, li {
    color: #1f2b75;
  }

  .intro h1 {
    font-size: 60px;
    text-align: center;
    font-weight: bold;
    color: white;
    background-color: #00ADD4;
    padding: 30px;
  }

  .intro h2 {
    font-size: 30px;
    text-align: center;
  }
  
  .container-fluid {
    padding: 0;
  }

</style>
