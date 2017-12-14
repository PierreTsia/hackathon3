<template>

  <div id="app-patrimoine">
    <h2>Votre patrimoine actif:</h2>

    <p v-for="(asset, index) in assets"> Nom : {{asset.name}} <br>
      Solde : {{asset.amount}} <br>Taux : {{asset.rate}} %
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
    // Fetches posts when the component is created.
    /*   async getCurrentAsset() {
      try {
        const response = await axios.get(
     
          `https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/4/asset/`
        );
        this.assets = response.data;
      } catch (e) {
        this.error.push(e);
      }
    } */
  },
  created() {
    this.$store.dispatch("GET_CURRENT_ASSETS");
    console.log("get_du_asset", this.assets);
  }
};
</script>



<style  scoped>

</style>

