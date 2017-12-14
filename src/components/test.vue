<template>
  <div>
    <ul>
      <li v-for="asset of assets"> Nom : {{asset.name}} <button v-on:click="addModel(asset)">Add</button><br> Solde : {{asset.amount}} <br>Taux : {{asset.rate}} %
      <br>Ratio risque :{{asset.ratioRisk}} <br>Ratio Liquidity : {{asset.ratioLiquidity}}
      
  
      </li>
  
    </ul>
  
  
  </div>
</template>



<script>
  import axios from "axios";
  export default {
    name: "test",
    data() {
      return {
        assets: [],
        errors: [],
        cart:[]
      };
    },
    methods : {
      addModel: function (input){
        this.cart.push(input);
        console.log(this.cart)
      }

    },
  
    // Fetches posts when the component is created.
    async created() {
      try {
        const response = await axios.get(
          `https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/asset/model`
        );
        this.assets = JSON.parse(response.data.body);
        console.log(this.assets)
      } catch (e) {
        this.error.push(e);
      }
    }

    
  };
</script>
