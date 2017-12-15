<template>
  <div id="app-model">
  
    <div class="container-fluid model">
      <div class="container model_content">
        <h2>Modèles de placements proposés:</h2>
  
  
        <div class="row">
  
          <div class="col-md-6" v-for="(modelAsset, index) in modelAssets">
            <ul class="models">
              <li><span class="list">{{modelAsset.name}}</span> <br>
                <input v-model="modelAssetAmount" placeholder="€">
                <button class="button1" v-on:click="getAssetInfo(modelAsset, index, modelAssetAmount)">X</button>
              </li>
            </ul>
          </div>
  
          <div class="col-md-12 datePicker">
            <div class="block col">
              <el-date-picker v-model="value9" type="daterange" start-placeholder="Start Date" end-placeholder="End Date" default-value="2017-12-15">
              </el-date-picker>
            </div>
          </div>
  
          <div class="col-md-12">
            <button class="button2" v-on:click="postNewAsset()">Ajouter ces placements</button>
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

<style scoped>
  .model_content {
    
    text-align: center;
  }
  
  .model {
    padding: 40px 0;
    background: url("../assets/encart-patrimoine.jpeg") no-repeat center fixed;
    background-size: cover;
  }
  
  .list {
    margin-bottom: 10px;
  }

  .models {
    padding: 10px 30px;
    background-color: rgba(245, 245, 245, 0.9);
  }
  
  h2 {
    text-align: center;
    padding: 10px 0 12px 0;
     background-color: rgba(245, 245, 245, 0.7);
     margin-bottom: 16px;
  }
  
  li {
    font-size: 20px;
    list-style: none;
  }
  
  .button2 {
    text-align: center;
    margin-top: 15px;
  }
</style>
