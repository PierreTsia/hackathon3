<template>
    <div id="app-charts">
    
        <div class="container-fluid chart">
            <div class="container chart2">
    
                <div id="accordion" role="tablist">
    
                    <div class="card">
                        <div class="card-header" role="tab" id="headingOne">
                            <h4 class="mb-0">
                                <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Vos actifs bancaires
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                            <div v-for="(asset, idAssetCategory) in assets" :key="idAssetCategory" v-if="asset.idAssetCategory == 1" class="cardBody">
                                <ul>
                                    <li>{{asset.name}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                    <div class="card">
                        <div class="card-header" role="tab" id="headingOne">
                            <h4 class="mb-0">
                                <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Vos assurance-vies
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                            <div v-for="(asset, idAssetCategory) in assets" :key="idAssetCategory" v-if="asset.idAssetCategory == 2" class="cardBody">
                                <ul>
                                    <li>{{asset.name}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingOne">
                            <h4 class="mb-0">
                                <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Vos actifs financiers (valeurs mobilères)
                    </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                            <div v-for="(asset, idAssetCategory) in assets" :key="idAssetCategory" v-if="asset.idAssetCategory == 3" class="cardBody">
                                <ul>
                                    <li>{{asset.name}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingOne">
                            <h4 class="mb-0">
                                <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Vos actifs professionnels
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                            <div v-for="(asset, idAssetCategory) in assets" :key="idAssetCategory" v-if="asset.idAssetCategory == 4" class="cardBody">
                                <ul>
                                    <li>{{asset.name}}</li>
                                </ul>
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

.chart2 {
  padding: 40px 0;
}

.chart2 h2 {
  text-align: center;
}

.card {
  margin: 40px 0 0 0;
}

.card ul {
  padding-top: 15px;
  list-style: ;
}

.card h4 {
  text-align: center;
}

.card a {
  text-decoration: none;
}

</style>
