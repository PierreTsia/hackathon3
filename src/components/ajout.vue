<template>

  <div id="app-ajout">
    <h2>Ajouter de nouveaux placements</h2>
    
    <form action="">

      <label for="">Client:</label>
      <select v-model="ajout.client" name="" id="">
        <option v-for="client in clients"> {{ client }} </option>
        <!-- select box créé. ajout des noms depuis data -->
      </select>

      <label for="">Nom du placement1:</label>
      <input type="text" v-model.lazy="ajout.placement1" required />
      <!-- .lazy sert à afficher une fois qu'on clique à côté et pas en même temps que l'input -->
      <label for="">Nom du placement2:</label>
      <textarea v-model.lazy="ajout.placement2" name="" id="" cols="10" rows="5"></textarea>
      
      <div id="checkboxes">
        <label for="">Assurance vie</label>
        <input type="checkbox" value="assurance" v-model="ajout.categories"/> 
        <!-- v-model magic, voir la data plus bas -->
        <!-- quand on va checker la checkbox, vue va ajouter la value à l'array dans data -->
        <label for="">Plan Epargne Action</label>
        <input type="checkbox" value="pea" v-model="ajout.categories"/>
        <label for="">Appartement - Résidence Principale</label>
        <input type="checkbox" value="appart" v-model="ajout.categories"/>
        <label for="">ISR - Infrastructure Asie</label>
        <input type="checkbox" value="isr" v-model="ajout.categories"/>
      </div>
      <button v-on:click.prevent="post">Ajouter un placement</button>
      <!-- .prevent: event modifier, pour changer la behavior du bouton -->
    </form>

    <div id="preview">
      <h3>Placement preview:</h3>
      <p>Client: {{ ajout.client }}</p>
      <!-- affiche le client sélectionné dans la checkbox de dessus -->
      <p>Checked placement:</p>
      <ul>
        <li v-for="category in ajout.categories"> {{ category }} </li>
      </ul>
      <p>Nom du placement1: {{ajout.placement1}} </p>
      <p>Nom du placement2:</p>
      <p> {{ajout.placement2}} </p>
    </div>

  </div>
</template>



<script>

export default {
  name: 'ajout',
  data() {
    return {
       ajout: {    /* vont ensemble, même form, donc ajout. aux 2 */
       placement1: "",
       placement2: "",
       categories: [],
       client: ""
       },
       clients: ["Mr Lalouche", "Mme Pee", "Mr Turd"]
    }
  },
  methods: {
      post: function(){
        this.$https.post("https://ulnjbgo4dl.execute-api.eu-central-1.amazonaws.com/dev/hackaton/user/asset/model",
         {
           name: this.ajout.placement1,

           
         })
      }
  }
}

</script>



<style>
  #app-ajout *{
    box-sizing: border-box;
  }
  #app-ajout {
    margin: 20px auto;
    max-width: 500px;;
  }
  label {
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"], textarea {
    display: block;
    width: 100%;
    padding: 8px;
  }
  #preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3 {
    margin-top: 10px;
  }
  #checkboxes input {
    display: inline-block;
    margin-right: 10px;
  }
  #checkboxes label {
    display: inline-block;
  }
</style>
