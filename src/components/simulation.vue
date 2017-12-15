<template>
    <div class="container" id="app-simulation">
        <h1>Patrimoine simulé</h1>

         <div class="row">
            <div class="summary" v-for="result in simulatedAssets" v-if="result.averageLiquidity && result.averageRisk"> <span> Moyenne taux de risque : {{(result.averageRisk/7 *100).toFixed(1)}} %</span> <br>
           <span> Moyenne taux de liquidité : {{(result.averageLiquidity / 5 * 100).toFixed(1)}} %</span>
             <ul>
                <li v-for="totalIncome in result.totalIncomeAmount">Total income Amount :{{totalIncome.toFixed(1)}}
                </li>
                <li v-for="totalAccumulated in result.totalAccumulatedAmount">Total Accumulated Amount :{{totalAccumulated.toFixed(1)}}
                </li>
            </ul>
            </div>

            <div class="row">

        <ul>
            <li v-if="asset.name" v-for="asset in simulatedAssets">
                <span >{{asset.name}} : </span><br>
              
                <span v-for="(amount, index) in asset.cumulatedAmount">{{index+2017}} : {{amount}} <br></span>
            </li>
        </ul>
         </div>

       
           


        </div>
    
    </div>

    
</template>


<script>
    import axios from "axios";
    import {
        mapGetters
    } from "vuex"
    
    
    export default {
        name: "simulation",
        computed: {
            ...mapGetters(['simulatedAssets'])
        },
        data() {
            return {
                year: index
            };
        },
        methods: {
            // Fetches posts when the component is created.
    
    
    
        },
    
    
    
        mounted() {
            this.$store.dispatch('GET_SIMULATED_ASSETS')
            console.log(simulatedAssets)
    
        }
    };
</script>

<style scoped>
    
</style>
