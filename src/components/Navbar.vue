<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center ha-custom-navbar">
      <center>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link active" to="/">Acceuil </router-link>
            <router-link class="nav-item nav-link" to="/argumentaire">Argumentaire</router-link>
            <router-link class="nav-item nav-link" to="/equipe-du-colloque">Equipe du Colloque</router-link>
            <router-link class="nav-item nav-link" to="/calendrier">Calendrier</router-link>
            <router-link class="nav-item nav-link" to="/procedure-de-soumission">Procédure de Soumission</router-link>
            <router-link class="nav-item nav-link" to="/normes-de-redaction">Normes de Rédaction</router-link>
            <router-link class="nav-item nav-link" to="/references-bibliographiques">Références bibliographiques</router-link>
            <router-link class="nav-item nav-link" to="/contact">Contact</router-link>
          </div>
        </div>
      </center>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

  .ha-custom-navbar{
    background-color: #4267b2 !important;
    color: white !important;
  }
  .ha-custom-navbar .nav-item{
    color: white !important;
    font-size: 20px !important;
  }
  .ha-custom-navbar .nav-item:hover{
    background-color: #5372b0;
  }

</style>