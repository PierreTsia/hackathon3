<template>
  <div id="app-patrimoine">
  
    <div class="container-fluid patrimoine">
      <div class="container patrimoine2">
        <h2>Votre patrimoine actif :</h2>
  
        <div class="row">
          <div v-for="(asset, index) in assets" :key="asset" class="col-sm-4">
            <div class="card text-center border-info mb-3">
              <div class="card-header">
                <h3>{{asset.name}}</h3>
              </div>
              <div class="card-body">
                <p> Solde : {{asset.amount}} <br>Taux : {{asset.rate}}  <br> Taux de Risque : {{asset.ratioRisk}}
  
                </p>
                <button class="button" v-on:click="deleteItem(asset)">Retirer</button>
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
    methods: {
      deleteItem: function(asset) {
        console.log("delete :" + asset.idAsset);
        axios.delete(`https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/asset/` + asset.idAsset)
          .then(response => {
            this.currentAssets = response.data;
            console.log("currentAssets :" + this.currentAssets)
            this.$store.dispatch("GET_CURRENT_ASSETS");
            this.$store.dispatch("GET_SIMULATED_ASSETS");
          })
          .catch(e => {
            this.errors.push(e);
          });
  
  
  
      }
    },
  
    created() {
      this.$store.dispatch("GET_CURRENT_ASSETS");
      console.log("get_du_asset", this.assets);
    }
  }
</script>



<style scoped>
  .patrimoine {
    background-image: linear-gradient(to right top, white 0%, #00ADD4 90%);
  }

  .patrimoine2{
    padding-bottom: 25px;
  }
  
  h2 {
    text-align: center;
    padding: 25px;
  }
  
  h3 {
    font-size: 18px;
    margin: 0;
  }
  
  p {
    margin: 16px 0 0 0;
  }

  .card-header {
    height: 79px;
  }
  
  .card-body {
    height: 110px;
  }

  .button {
    background-color: white;
    color: white#00ADD4;
    border-radius: 10%;
    margin-top: 8px;
  }
  
  .button:hover {
    background-color: #00ADD4;
    color: white;
    border-radius: 50%;
  }
</style>

