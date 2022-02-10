<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center ha-custom-navbar navbar-static-top">
      <center>
        <button style="display: none" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse show" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link active" to="/">Accueil </router-link>
            <router-link class="nav-item nav-link" to="/comite">Comités</router-link>
            <router-link class="nav-item nav-link" to="/procedure-de-soumission">Soumission</router-link>
            <router-link class="nav-item nav-link" to="/inscription">Inscription</router-link>
            <router-link class="nav-item nav-link" to="/conferenciers">Conférenciers </router-link>
            <router-link class="nav-item nav-link" to="/programme">Programme</router-link>
            <router-link class="nav-item nav-link" to="/calendrier">Calendrier</router-link>
            <router-link class="nav-item nav-link" to="/editions-précedantes">Editions précedentes</router-link>
            <router-link class="nav-item nav-link" to="/concour">Concours</router-link>
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
    /* #4267b2 */
    background-color: #4267b2 !important;
    color: white !important;
    border-top: 1px solid #ffffff;
  }
  .ha-custom-navbar .nav-item{
    color: #ffffff !important;
    font-size: 20px !important;
  }
  .ha-custom-navbar .nav-item:hover{
    background-color: #5372b0;
    color: #ffffff !important;
  }

</style>