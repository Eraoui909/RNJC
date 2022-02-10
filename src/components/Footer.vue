<template>
  <div class="ha-footer">
      <div class="ha-footer-1">
          <h4>Partenaires</h4>
          <div class="ha-logo-list">

            <div class="ha-logo-card ha-logo-1">
            </div>

            <div class="ha-logo-card ha-logo-2">
            </div>

            <div class="ha-logo-card ha-logo-3">
            </div>

            <div class="ha-logo-card ha-logo-4" style="background-position: center ">
            </div>

            <div class="ha-logo-card ha-logo-5">
            </div>

            <div class="ha-logo-card ha-logo-6">
            </div>


          </div>
      </div>
      <div class="row ha-footer-2" >
        <div class="col-md-6">
          <span>
            LSSC, Faculté des Sciences et Techniques de Fès
          </span>
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
    width: 100%;
    margin: 0px auto;
  }

  .ha-footer-1{
    width: 100%;
    color: #EEEEEE;
    padding: 15px;
  }

  .ha-logo-list{
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .ha-logo-card{
    width: 150px;
    height: 150px;
    overflow: hidden;
    margin: 10px auto;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .ha-logo-1{
    background-image: url("../assets/pictures/men_gov_blue.png");
  }
  .ha-logo-2{
    background-image: url("../assets/pictures/part_3.jpg");
  }
  .ha-logo-3{
    background-image: url("../assets/pictures/usmba.png");
  }
  .ha-logo-4{
    background-image: url("../assets/pictures/fst.png");
  }
  .ha-logo-5{
    background-image: url("../assets/pictures/logo_gasup.png");
  }
  .ha-logo-6{
    background-image: url("../assets/pictures/apsardi.png");
  }


</style>