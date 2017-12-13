<template>
<div>
    <p v-for="model of models"> Nom : {{model.name}} <br>
    Solde : {{model.amount}} <br>Taux : {{model.rate}} %

    </p>
</div>

  
</template>



<script>
import axios from "axios";
export default {
  name: "test",
  data() {
    return {
      models: [],
      errors: []
    };
  },

  // Fetches posts when the component is created.
  created() {
    axios
      .get(
        `https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/4/asset/`
      )
      .then(response => {
        // JSON responses are automatically parsed.
        this.models = response.data;
        console.log(this.models);
        
      })
      .catch(e => {
        this.errors.push(e);
      });
  }

   /*   mounted() {
            axios({ method: "GET", "url": "https://cors-anywhere.herokuapp.com/https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/asset/model" })
            .then(result => {
                this.models = result.data.body;
                console.log(this.models)
            }, error => {
                console.error(error);
            });
} */
}
</script>
