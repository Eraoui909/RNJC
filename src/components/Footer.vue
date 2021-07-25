<template>
  <div class="ha-footer">
      <div class="row ha-footer-1">
        <div class="col-md-4">
          <img src="../assets/pictures/logo_cellule.png" alt="logo cellule" width="200px">
        </div>
        <div class="col col-larg-2">
          <h4 style="font-weight: bold;color: white">LA CELLULE TECHNIQUES DE COMMUNICATION & GESTION</h4>
        </div>
      </div>
      <div class="row ha-footer-2" >
        <div class="col-md-6">
          <span>Cellule TEC & Gestion</span>
        </div>
        <div class="col-md-6" style="text-align: right">
          <span>Devolopped By <strong>Hamza Eraoui</strong></span>
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
    height: 200px;
  }
  .ha-footer-1 div h4{
    padding-top: 70px;
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