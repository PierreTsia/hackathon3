<template>
  <div id="app-model">
    <div class="container-fluid patrimoine">
      <div class="container patrimoine2">
        <h2>Modèles de placements proposés:</h2>
  
      
        <ul>
          <li v-for="(modelAsset, index) in modelAssets">{{modelAsset.name}} <br>
            <input v-model="modelAssetAmount">
            <button v-on:click="addAmount(index)">X</button>
  
  
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
  
          modelAssetAmount: ""
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
  
  
      addAmount: function(index) {
        console.log(this.modelAssetAmount);
        console.log(index);
      },
  
      async postNewAsset() {
        this.newAsset.idUser = 4;
        this.newAsset.idAssetModel = 1;
        this.newAsset.name = "Assurance vie";
        this.newAsset.amount = this.modelAssetAmount;
        this.newAsset.rate = 1.5;
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
