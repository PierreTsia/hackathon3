<template>
  <div id="app-listeModel">
      <h1>Tous les models de placements disponibles:</h1>
      <div v-for="" class="placement"></div>
  </div>
</template>



<script>

export default {

  data() {
    return {

    }
  },
  methods: {

  },
  created(){
      this.$http.get('https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/asset/model/body')
      .then(function(data){
          console.log(data);
      })
  }
}

</script>