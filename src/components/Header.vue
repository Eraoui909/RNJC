<template>
  <div class="ha-haeder">
      <div class="row">
        <div class="col col-lg-2 ha-col-1">
          <img src="../assets/pictures/logo_cellule.png" alt="logo cellule">
        </div>
        <div class="col-md-8 ha-col-2">
         <center>
           <h1 >
             LA CELLULE TECHNIQUES DE COMMUNICATION & GESTION
           </h1>
           <br>
           <h3 style="color: #EEE">
             Organise
           </h3>
           <h2 >
               La 1ère EDITION DU COLLOQUE INTERNATIONAL
           </h2>
           <h3 style="color: #e13b3b">
             INNOVATION PEDAGOGIQUE & EMPLOYABILITE : QUELLES PRATIQUES FORMATIVES A L’UNIVERSITE ?
           </h3>
           <h3>
             Appel à communications
           </h3>
           <strong style="color: yellow">
             Le 26 & 27 Novembre 2021, Fès
           </strong>
         </center>
        </div>
        <div class="col col-lg-2 ha-col-3">
          <center>
            <img src="../assets/pictures/usmba.png" alt="logo_USBMA">
            <img src="../assets/pictures/fst.png" alt="logo_fst">
          </center>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data (){
    return{

    }
  }
}
</script>

<style scoped>

  .ha-haeder{
    position: relative;
    width: 100%;
    padding: 25px;
    background-color: #002263;
    background-image: linear-gradient(45deg, black, transparent);
    color: white;
  }

  .ha-col-1{
    position: relative;
  }
  .ha-col-1 img{
    display: block;
    width: 200px;
    margin: 0px auto;
    padding-top: 30px;
  }
  @media only screen and (max-width: 780px){
    .ha-col-1 img{
      width: 50%;
      margin: 0px auto;
    }
    .ha-col-2{
      margin-top: 0px;
    }
  }

  .ha-col-2{
    margin-top: 30px;
  }


  .ha-col-3 img{
    display: block;
    margin: 20px 0px;
    width: 120px;
    border-radius: 50%;
    height: 120px;
  }


</style>