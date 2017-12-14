<template>

  <div id="app-patrimoine">
    <h2>Votre patrimoine actif:</h2>

    <p v-for="(asset, index) in assets"> Nom : {{asset.name}} <br>
      Solde : {{asset.amount}} <br>Taux : {{asset.rate}} % <br>
       Taux de Risque : {{asset.ratioRisk}}
    </p>
    <button>DELETE QUI FAIT RIEN ENCORE</button>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

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
    
  },
  created() {
    this.$store.dispatch("GET_CURRENT_ASSETS");
    console.log("get_du_asset", this.assets);
  }
};
</script>



<style  scoped>

</style>

