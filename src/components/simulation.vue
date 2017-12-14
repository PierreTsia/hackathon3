<template>
    <div id="app-simulation">
        <h1>Patrimoine simulé</h1>
        <ul>
            <li v-for="asset in simulatedAssets">{{asset}}<br>
                <span>{{asset.name}} : </span><br>
                <span v-for="(amount, index) in asset.cumulatedAmount">{{index+2017}} : {{amount}} <br></span>
            </li>
        </ul>
    
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
