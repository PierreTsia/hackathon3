<template>
  <div id="app-patrimoine">
    <h2>Votre patrimoine actif:</h2>
  
    <p v-for="(asset, index) in assets"> Nom : {{asset.name}} <br> Solde : {{asset.amount}} <br>Taux : {{asset.rate}} % <br> Taux de Risque : {{asset.ratioRisk}}
      <button v-on:click="deleteItem(asset)">DEL</button>
    </p>
    <button>DELETE QUI FAIT RIEN ENCORE</button>
  </div>
</template>

<script>
  import axios from "axios";
  import {
    mapGetters
  } from "vuex";
  
  export default {
    name: "patrimoine",
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
  
</style>

