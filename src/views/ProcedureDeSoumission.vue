<template>
  <div class="ha-procedure">
    <h1>Soumission</h1>

    <div class="ha-soumi-content">
      <h3>Un résumé détaillé des travaux de recherche ne doit pas dépasser deux pages.</h3>
      <a href="../../public/papier/Template-Résumé_RNJC-SI_22_CO.doc" style="margin-left: 20px" target="_blank">Télécharger le Modèle Word</a>
      <p>Le Papier doit être soumis à travers easychair, selon ce Template-là.</p>
      <h3>Lien de soumission :</h3>
      <a href="https://easychair.org/conferences/?conf=rnjcsi22" target="_blank" style="margin-left: 20px">(EasyChair)</a>
      <hr>
      <p class="text-danger">
        NB : Si vous avez des questions concernant la soumission d'un résumé, veuillez contacter le responsable du programme à l'adresse :
        <a href="mailto:fatiha.mrabti@usmba.ac.ma">RNJC-SI@usmba.ac.ma</a>
      </p>
    </div>

  </div>

</template>

<script>
export default {
  name: "ProcedureDeSoumission"
}
</script>

<style scoped>

  .ha-procedure{
    padding: 20px 30px;
  }
  .ha-procedure h1{
    font-weight: bold;
    color: #4267b2;
    font-size: 2em;
  }

  .ha-soumi-content{
    padding: 20px 30px;

  }

  .ha-soumi-content h2{
    font-weight: bold;
    color: #4267b2;
  }


  .ha-soumi-content a{
    text-decoration: none;
    color: #2196f3;
  }
</style>