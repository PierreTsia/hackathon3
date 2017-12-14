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
                <p> Solde : {{asset.amount}} <br>Taux : {{asset.rate}} % <br>
       Taux de Risque : {{asset.ratioRisk}}</p>
       <button v-on:click="deleteItem(asset)">DEL</button>
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
            console.log("currentAssets :"+this.currentAssets)
            this.$store.dispatch("GET_CURRENT_ASSETS");
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
    background-image: linear-gradient(to right top, white 0%, #00ADD4 100%);
  }
  
  h2 {
    text-align: center;
    padding: 25px;
  }
  
h3 {
  font-size: 25px;
  margin: 0;
}

  p {
    margin-top: 16px;
  }

  .card {
    height: 177px;
  }

  .card-header {
    height: 79px;
  }
  
</style>

