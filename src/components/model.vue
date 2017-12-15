<template>
  <div id="app-model">
  
    <div class="container-fluid model">
      <div class="container model_content">
        <h2>Modèles de placements proposés:</h2>
  
  
        <div class="row">
  
          <div class="col-md-6" v-for="(modelAsset, index) in modelAssets">
            <ul class="models">
              <li><span class="list">{{modelAsset.name}}</span> <br>
                <div>
                  <el-tooltip class="item" 
                  effect="dark" 
                  content="Taux d'intérêt : ce que vous rapporte votre placement" 
                  placement="top-start">
                  <icon  v-bind:class="{ 'low': modelAsset.rate <= 5, 'average': modelAsset.rate > 5 && modelAsset.rate < 8, 'high' : modelAsset.rate >= 8 }" class="fa" name="long-arrow-up"></icon> 
                  </el-tooltip>{{modelAsset.rate}} %
                  </span>
                  | <span>  
                  <el-tooltip class="item" 
                  effect="dark" 
                  content="Taux de risque : plus ce taux est élevé et plus votre placement comporte des risques de pertes en capital" 
                  placement="top-start">
                  <icon  v-bind:class="{ 'low': (modelAsset.ratioRisk / 7 * 100).toFixed(1) <= 35, 'average': (modelAsset.ratioRisk / 7 * 100).toFixed(1) >= 35 && (modelAsset.ratioRisk / 7 * 100).toFixed(1) <=60, 'high' : (modelAsset.ratioRisk / 7 * 100).toFixed(1) > 60 }"class="fa" name="arrows-v"></icon> 
                  </el-tooltip>{{(modelAsset.ratioRisk / 7 * 100).toFixed(1)}} % 
                  </span>
                  | <span>  
                  <el-tooltip class="item" 
                  effect="dark" 
                  content="Taux de liquidité : un taux élevé garantit la disponibilité de votre argent en cas de besoin" 
                  placement="top-start">
                  <icon v-bind:class="{ 'low': (modelAsset.ratioLiquidity / 5 * 100).toFixed(1) <= 35, 'average': (modelAsset.ratioLiquidity / 5 * 100).toFixed(1) >= 35 && (modelAsset.ratioLiquidity / 5 * 100).toFixed(1) <=60, 'high' : (modelAsset.ratioRisk / 7 * 100).toFixed(1) > 60 }"class="fa" name="money"></icon> 
                  </el-tooltip>{{(modelAsset.ratioLiquidity / 5 * 100).toFixed(1)}} % 
                  </span>
                
                </div>
  
                <input v-model="modelAssetAmount" placeholder="€">
                <button class="button1" v-on:click="getAssetInfo(modelAsset, index, modelAssetAmount)"> <icon class="fa" name="plus-circle"></icon></button>
              </li>
            </ul>
          </div>
  
          <div class="col-md-12 datePicker">
            <div class="block col">
              <!--  <el-date-picker v-model="value9" type="daterange" start-placeholder="Start Date" end-placeholder="End Date" default-value="2017-12-15">
                  </el-date-picker> -->
              <icon class="fa" name="calendar"></icon>
              <input v-model="startDate" placeholder="End Date (ex : 2020)">
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
  import Icon from 'vue-awesome/components/Icon'
  
   
  


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
  
        console.log("simulated assets :" + this.simulatedAssets)
        console.log(this.startDate)
      },
  
      async postNewAsset() {
        this.newAsset.idUser = 4;
        this.newAsset.idAssetModel = this.modelAssetIdAssetModel;
        this.newAsset.name = this.modelAssetName;
        this.newAsset.amount = this.modelAssetAmount;
        this.newAsset.rate = this.modelAssetRate / 100;
        this.newAsset.start = "2017-12-01T00:00:00.000Z";
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
    components: {
      Icon
    },
    mounted() {
      this.$store.dispatch('GET_MODEL_ASSETS')
  
    }
  };
</script>

<style scoped>

  .low {
    color : green;
  }

  .average{
    color : orange;
  }

  .high{
    color : red;
  }
  .fa {}
  
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
