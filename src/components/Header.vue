<template>
  <div class="ha-haeder">

      <div class="row">
        <div style="margin: 0px auto;width: 100%;">
          <img src="../assets/pictures/LogoFST.png" class="ha-title-0" width="95%" height="70%" alt="fst_banner">
        </div>
        <div style="margin: 0px auto;width: 100%;">
          <center>
            <img src="../assets/pictures/LSSC.png" class="ha-logo-labo" width="22%" height="%" alt="fst_banner">
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
    padding: 10px 25px;
    color: white;
  }

  .ha-col-1 img{
    display: block;
    width: 200px;
    margin: 0px auto;
    padding-top: 40px;
  }
  .ha-logo-labo{
    transform: translateY(-12px);
  }
  @media only screen and (max-width: 780px){
    .ha-col-1 img{
      width: 35%;
      margin: 0px auto;
    }

    .ha-title-0{
      width: 100%;
      height: 100%;
    }
    .ha-logo-labo{
      transform: translateY(0px);
    }
  }


  .ha-col-3 img{
    display: block;
    margin: 20px 0px;
    width: 120px;
    border-radius: 50%;
    height: 120px;
  }




</style>