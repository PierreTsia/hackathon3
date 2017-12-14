<template>
  <div id="app-model">
    <div class="container-fluid patrimoine">
      <div class="container patrimoine2">
        <h2>Modèles de placements proposés:</h2>
        <ul>
          <li v-for="(modelAsset, index) in modelAssets">Nom :{{modelAsset.name}} <br>
  
            <input v-model="modelAssetAmount">
            <button v-on:click="getAssetInfo(modelAsset, index, modelAssetAmount)">X</button>
  
  
  
          </li>
        </ul>
  
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
        newAsset: {}
        // errors:
      };
    },
    methods: {
      // Fetches posts when the component is created.
  
  
      getAssetInfo: function(modelAsset, index, modelAssetAmount) {
        this.modelAssetName = modelAsset.name;
        this.modelAssetRate = modelAsset.rate;
        this.modelAssetIdAssetModel = modelAsset.idAssetModel;
  
  
        console.log(modelAssetAmount);
        console.log(index);
      },
  
      async postNewAsset() {
        this.newAsset.idUser = 4;
        this.newAsset.idAssetModel = this.modelAssetIdAssetModel;
        this.newAsset.name = this.modelAssetName;
        this.newAsset.amount = this.modelAssetAmount;
        this.newAsset.rate = this.modelAssetRate;
        this.newAsset.start = "2017-12-14T00:00:00.000Z";
        this.newAsset.end = null;
        try {
          const response = await axios.post(
            "https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/asset",
            this.newAsset
          );
          console.log(this.newAsset);
        } catch (e) {
          this.error.push(e);
        }
        this.$store.dispatch("GET_CURRENT_ASSETS");
      }
    },
    mounted() {
      this.$store.dispatch('GET_MODEL_ASSETS')
  
    }
  };
</script>

<style>
  
</style>
