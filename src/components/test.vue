<template>
<div id="app-test">
  <h2>Blabla</h2>
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
        const response = await axios.get(`http://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/4/asset/`)
        this.assets = response.data;
        console.log(this.assets)
   } catch(e){
       this.error.push(e)
   } 
  },
  
}
</script>
