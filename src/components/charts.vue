<template>
    <div id="app-charts">
        <div class="container-fluid chart">
    
            <div class="container">
                <div>
                    <h3>Vos actifs bancaires:</h3>
                    <div>
                        <div v-for="(asset, idAssetCategory) in assets" :key="idAssetCategory" class="col-sm-4">
                            <div v-if="idAssetCategory == 1" class="card text-center border-info mb-3">
                                <div class="card-header">
                                    <h3>{{asset.name}}</h3>
                                </div>
                                <div class="card-body">
                                    <p> Solde : {{asset.amount}} <br>Taux : {{asset.rate}} <br> Taux de Risque : {{asset.ratioRisk}}
    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div>
                    <h3>Vos assurance-vies:</h3>
                    <div>
                        <div v-for="(asset, idAssetCategory) in assets" :key="idAssetCategory" class="col-sm-4">
                            <div v-if="idAssetCategory == 2" class="card text-center border-info mb-3">
                                <div class="card-header">
                                    <h3>{{asset.name}}</h3>
                                </div>
                                <div class="card-body">
                                    <p> Solde : {{asset.amount}} <br>Taux : {{asset.rate}} <br> Taux de Risque : {{asset.ratioRisk}}
    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div>
                    <h3>Vos actifs financiers (valeurs mobilères):</h3>
                    <div>
                        <div v-for="(asset, idAssetCategory) in assets" :key="idAssetCategory" class="col-sm-4">
                            <div v-if="idAssetCategory == 3" class="card text-center border-info mb-3">
                                <div class="card-header">
                                    <h3>{{asset.name}}</h3>
                                </div>
                                <div class="card-body">
                                    <p> Solde : {{asset.amount}} <br>Taux : {{asset.rate}} <br> Taux de Risque : {{asset.ratioRisk}}
    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div>
                    <h3>Vos actifs professionnels:</h3>
                    <div>
                        <div v-for="(asset, idAssetCategory) in assets" :key="idAssetCategory" class="col-sm-4">
                            <div v-if="idAssetCategory == 4" class="card text-center border-info mb-3">
                                <div class="card-header">
                                    <h3>{{asset.name}}</h3>
                                </div>
                                <div class="card-body">
                                    <p> Solde : {{asset.amount}} <br>Taux : {{asset.rate}} <br> Taux de Risque : {{asset.ratioRisk}}
    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    import axios from "axios";
    import {
        mapGetters
    } from "vuex";
    import BootstrapVue from "bootstrap-vue";
    
    export default {
        computed: {
            ...mapGetters(["assets"])
        },
        data() {
            return {
                currentAssets: [],
    
                modelAssets: [],
                newAsset: {}
                // errors:
            };
        },
    
        created() {
            this.$store.dispatch("GET_CURRENT_ASSETS");
            console.log("get_du_asset", this.assets);
        }
    }
</script>



<style scoped>
    .chart {
        background-image: linear-gradient(to left top, #00ADD4 0%, white 90%);
    }
</style>
