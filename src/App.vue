<template>
  <div>
<app-ajout></app-ajout>
  </div>
</template>



<script>
import ajout from './components/ajout.vue'
import listeModel from './components/listeModel.vue'

export default {
  components: {
    'app-ajout': ajout,
    'app-listeModel': listeModel
  },
  name: 'app',
  data() {
    return {

    }
  },
  methods: {

  }
}

</script>



<style>
  body {
    margin: 0;
  }
</style>
