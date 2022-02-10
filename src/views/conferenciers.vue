<template>
  <div class="ha-conferiencier">
    <h1>Conférienciers</h1>
    <div class="ha-bio-container ">

      <!----- -----------
      <div  class="ha-bio-card" data-toggle="tooltip" data-placement="bottom" title="Cliquez pour voir les détails">
        <div class="ha-bio-card-pop-up">
        </div>
        <div class="ha-bio-card-content"  data-toggle="modal" data-target="#JacquesTardif">
          <span class="ha-tag">
            Nom Prenom
          </span>
          <span class="ha-name">
            Option
          </span>
        </div>
      </div>

      <div class="modal fade bd-example-modal-lg" id="JacquesTardif" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Nom Prenom</h5>
              <button type="button" style="border: none" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-2">
                  <img src="../assets/biographie/avatar.png" width="110px" height="130px" alt="Jacques_Tardif">
                </div>
                <div class="col-md-10">
                  <p>Description</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      ------>

      Coming soon..



    </div>
  </div>
</template>

<script>
export default {
  name: "conferenciers",
  mounted() {
  },

}
</script>

<style scoped>
.ha-conferiencier{
  padding: 20px 30px;
}
h1{
  font-weight: bold;
  color: #4267b2;
  font-size: 2em;
}
a{
  text-decoration: none;
}
p{
}

.ha-bio-container{
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 15px;
  margin: 0px auto;
  flex-wrap: wrap;
}
@media only screen and (max-width:600px) {
  .ha-bio-container{
    width: 100%;
  }
}
.ha-bio-card{
  width: 280px;
  height: 320px;
  margin: 30px 20px;
  background-image: url('../assets/biographie/avatar.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
@media only screen and (max-width:600px) {
  .ha-bio-card{
    margin: 10px auto;
  }
}
.ha-bio-card .ha-bio-card-pop-up{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: #000000d1;
  opacity: 0.4;
  z-index: 2;
}
.ha-bio-card .ha-bio-card-content{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 3;
  color: white;
  padding: 10px;
  cursor: pointer;

}
.ha-bio-card .ha-bio-card-content .ha-name{
  position: absolute;
  left: 20px;
  bottom: 30px;
  font-weight: bold;
}
.ha-bio-card .ha-bio-card-content .ha-tag{
  position: absolute;
  left: 20px;
  top: 20px;
  font-weight: bold;
  background-color: #a00000;
  padding:3px 5px;
  font-size: 13px;
  letter-spacing: 3px;
}

/* ------------------------------------------------- */



</style>