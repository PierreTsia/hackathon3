<template>
  <div id="app-model">
    <div class="container-fluid model">
      <div class="container model2">
        <h2>Modèles de placements proposés:</h2>
        <ul>
          <li v-for="(modelAsset, index) in modelAssets">Nom :{{modelAsset.name}} <br>
  
            <input v-model="modelAssetAmount">
            <button v-on:click="getAssetInfo(modelAsset, index, modelAssetAmount)">X</button>
  
  
  
          </li>
        </ul>

        <div>
           <input v-model="startDate">
        </div>
  
      <!--   <div class="block">
          <span class="demonstration">daterange</span>
          <el-date-picker v-model="value9" 
          type="daterange" 
          start-placeholder="Start Date" 
          end-placeholder="End Date" 
          default-value="2017-01-01">
          </el-date-picker>
        </div> -->
  
        <button v-on:click="postNewAsset()">Simulation</button>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from "axios"
  import {
    mapGetters
  } from "vuex"
  
  export default {
    computed: {
      ...mapGetters(['modelAssets'])
    },
    data() {
      return {
        ajout: {
          /* vont ensemble, même form, donc ajout. aux 2 */
  
          modelAssetAmount: "",
          modelAssetName: "",
          modelAssetBaseTax: "",
          modelAssetFeesSetup: "",
          modelAssetFeesYear: "",
          modelAssetIdAssetCategory: "",
          modelAssetIdAssetModel: "",
          modelAssetIdAssetType: "",
          modelAssetIdDetention: "",
          modelAssetRate: "",
          modelAssetRatioLiquidity: "",
          modelAssetRatioRisk: "",
        },
  
        results: [],
        assets: [],
        errors: [],
        newAsset: {},
        startDate: '',
       
        // errors:
      };
    },
    methods: {
      // Fetches posts when the component is created.
  
  
      getAssetInfo: function(modelAsset, index, modelAssetAmount) {
        this.modelAssetName = modelAsset.name;
        this.modelAssetRate = modelAsset.rate;
        console.log(this.modelAssetRate)
        this.modelAssetIdAssetModel = modelAsset.idAssetModel;
  
  
        console.log(modelAssetAmount);
        console.log(index);
        console.log(this.startDate)
      },
  
      async postNewAsset() {
        this.newAsset.idUser = 4;
        this.newAsset.idAssetModel = this.modelAssetIdAssetModel;
        this.newAsset.name = this.modelAssetName;
        this.newAsset.amount = this.modelAssetAmount;
        this.newAsset.rate = this.modelAssetRate / 100;
        this.newAsset.start = this.startDate;
        this.newAsset.end = null;
        try {
          const response = await axios.post(
            "https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/asset",
            this.newAsset
          );
          console.log("coucou :" + this.newAsset.rate);
        } catch (e) {
          this.error.push(e);
        }
        this.$store.dispatch("GET_CURRENT_ASSETS");
        this.$store.dispatch("GET_SIMULATED_ASSETS");
      }
    },
    mounted() {
      this.$store.dispatch('GET_MODEL_ASSETS')
  
    }
  };
</script>

<style>
  
</style>
