<template>
  <div id="app">
    <div class="container-fluid">
      <h1>CG PRO</h1>
    </div>
    <app-patrimoine></app-patrimoine>
    <div class="container-fluid photoScroll">

    </div>
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

  .photoScroll {
    height: 300px;
    background: url("./assets/encart-patrimoine.jpeg") no-repeat center fixed;
    background-size: cover;
  }
</style>
