<template>
<div>
    <p v-for="asset of assets"> Nom : {{asset.name}} <br>
    Solde : {{asset.amount}} <br>Taux : {{asset.rate}} %

    </p>

    
</div>

  
</template>



<script>
import axios from "axios";
export default {
  name: "test",
  data() {
    return {
      assets: [],
      errors: []
    };
  },

  // Fetches posts when the component is created.
 async created() {
    try{
        const response = await axios.get(`https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/4/asset/`)
        this.assets = response.data;
   } catch(e){
       this.error.push(e)
   } 
  }
}
</script>
