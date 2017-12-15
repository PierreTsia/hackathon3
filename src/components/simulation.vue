<template>
    <div id="app-simulation">
        <h1>Patrimoine simulé</h1>
        <ul>
            <li v-if="asset.name" v-for="asset in simulatedAssets">
                <span >{{asset.name}} : </span><br>
                <span >{{asset.rate}} : </span><br>
                <span v-for="(amount, index) in asset.cumulatedAmount">{{index+2017}} : {{amount}} <br></span>
            </li>
        </ul>

        <div>
            <div v-for="result in simulatedAssets" v-if="result.averageLiquidity && result.averageRisk"> <span> Moyenne taux de risque : {{result.averageRisk}}</span> <br>
           <span> Moyenne taux de liquidité : {{result.averageLiquidity}}</span>
             <ul>
                <li v-for="totalIncome in result.totalIncomeAmount">Total income Amount :{{totalIncome}}
                </li>
                <li v-for="totalAccumulated in result.totalAccumulatedAmount">Total Accumulated Amount :{{totalAccumulated}}
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

<style>
    
</style>
