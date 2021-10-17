<template>
  <div class="ha-footer">
      <div class="row ha-footer-1">
        <div class="col-md-3">
          <img src="../assets/pictures/logo_cellule.png" alt="logo cellule" width="200px">
        </div>
        <div class="col col-larg-2">
          <h4 >Les partenaires</h4>
          <div class="d-flex justify-content-between p-4" style="flex-wrap: wrap">
            <div class="d-flex justify-content-between">
              <img src="../assets/pictures/part_1.jpg" height="80px" width="80px" alt="part_1">
              <p style="color: rgb(153, 153, 153);
                        text-align: justify;
                        width: 176px;
                        font-size: 14px;
                        margin-left: 6px;">
                Ministère de l’Enseignement Supérieur,
                    de la Recherche Scientifique et
                    de la Formation des Cadres
              </p>
            </div>
            <div class="d-flex justify-content-between"  >
              <img src="../assets/pictures/part_3.jpg" height="80px" width="100px" alt="">
              <p style="color: rgb(153, 153, 153);
                        text-align: justify;
                        width: 176px;
                        font-size: 14px;
                        margin-left: 6px;">
                Centre National pour la Recherche
              </p>
            </div>
            <div>
              <img src="../assets/pictures/part_2.jpg" height="80px" width="200px" alt="part_2" style="margin: 10px auto;">
            </div>
          </div>

          <div class="d-flex justify-content-between p-4" style="flex-wrap: wrap">

            <div class="d-flex justify-content-between">
              <img src="../assets/pictures/labo_lsia.png" height="80px" width="150px" alt="part_1">
              <p style="color: rgb(153, 153, 153);
                        text-align: justify;
                        width: 136px;
                        font-size: 14px;
                        margin-left: 6px;">
                Le laboratoire LSIA (Laboratoire des Systèmes Intelligents & Applications)
              </p>
            </div>

            <div class="d-flex justify-content-between">
              <p style="color: rgb(153, 153, 153);
                        text-align: justify;
                        width: 196px;
                        font-size: 14px;
                        margin-left: 6px;">
                Laboratoire de Recherche et d’Etudes en Management, Entrepreneuriat et Finance LAREMEF ( ENCG FES)
              </p>
            </div>

            <div class="d-flex justify-content-between">
              <img src="../assets/pictures/Logo_est.png" height="80px" width="150px" alt="part_1">
              <p style="color: rgb(153, 153, 153);
                        text-align: justify;
                        width: 160px;
                        font-size: 14px;
                        margin-left: 6px;">
                Laboratoire des Technologies Innovantes, Ecole Supérieure de Technologie (EST FES)
              </p>
            </div>


          </div>

          <div class="d-flex justify-content-between p-4" style="flex-wrap: wrap">

            <div class="d-flex justify-content-between">
              <img src="../assets/pictures/apsardi.png" height="80px" width="80px" alt="part_1">
              <p style="color: rgb(153, 153, 153);
                        text-align: justify;
                        width: 196px;
                        font-size: 14px;
                        margin-left: 6px;">
                Association pour la Promotion et le Soutien aux Activités de recherche, Développement et d’innovation              </p>
            </div>

          </div>

        </div>
      </div>
      <div class="row ha-footer-2" >
        <div class="col-md-6">
          <span>Cellule TEC & Gestion</span>
        </div>
        <div class="col-md-6" style="text-align: right">
          <span>Developed by <strong>Hamza Eraoui</strong></span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

  .ha-footer{
    width: 100%;
    padding: 0px 10px;
  }
  .ha-footer-1{
    padding: 15px;
    background-color: #353535;
  }
  .ha-footer-1 div{
  }
  .ha-footer-1 div h4{
    padding-top: 10px;
    font-size: 20px;
    color: white
  }

  @media only screen and (max-width: 780px){
    .ha-footer{
      text-align: center ;
    }
    .ha-footer-2 div{
      text-align: center !important;
    }
  }

  .ha-footer-2 {
    background-color: #272727;
    color: white;
    padding: 10px;
  }

</style>