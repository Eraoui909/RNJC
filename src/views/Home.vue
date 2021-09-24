<template>
  <div class="home">

    <div class="ha-coming-soon ">
      <div class="bgimg">
        <center style="position: relative">
          <div class="ha-pop-up"></div>
          <div id="carouselExampleSlidesOnly"  class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">

              <div class="carousel-item">
                <img src="../assets/pictures/place_royale.jpg" height="450px" width="90%" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/pictures/home_02.jpg" height="450px" width="90%" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item active">
                <img src="../assets/pictures/fst1.jpg" height="450px" width="90%" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/pictures/Al-Qarawiyyin-University.jpg" height="450px" width="90%" class="d-block w-100" alt="Al-Qarawiyyin-University">
              </div>
            </div>
          </div>
          <div class="middle">
            <h1 class="ha-countdown-title" >Il reste pour le début de colloque</h1>
            <hr>
            <p id="demo"></p>
          </div>
        </center>
      </div>
      <div class="ha-home-content">

        <section class="ha-nb">
          <span style="margin-left: 20px;font-size: 17px">Le colloque aura lieu en présentiel si la situation pandémique
            le permet, ou, à distance, le cas contraire.</span>
        </section>

        <div class="ha-sub-content">
          <div class="row">
            <div class="col-md-7">
              <section class="ha-objectif">
                <h1>OBJECTIF</h1>
                <p align="justify">
                  Ce colloque relève d’une préoccupation majeure qui est de dispenser dans nos universités une formation de
                  qualité s’accordant pleinement avec les besoins du marché de l’emploi. Il est pour cela impératif de
                  repenser les pratiques pédagogiques usuelles et cibler avant tout la formation d’un citoyen diplômé
                  conscient des défis qui l’attendent en ce XXIème siècle. Dans cette optique, notre activité se veut un
                  espace de discussion permettant à la fois un retour d’expériences et une réflexion sur les éventuelles
                  perspectives d’avenir quant à un enseignement pertinent.
                </p>
              </section>
            </div>
            <div class="col-md-5">
              <div class="ha-informations">
                <h1>INFORMATIONS</h1>
                <ul>
                  <li>
                    <h5>Soumission des intentions de communication</h5>
                    <span>30 Septembre 2021</span>
                    <span class="ha-old-date">15 Septembre 2021</span>
                  </li>
                  <li>
                    <h5>Notification du comité scientifique</h5>
                    <span>10 Octobre 2021</span>
                    <span class="ha-old-date">30 septembre 2021</span>
                  </li>
                  <li>
                    <h5>Date limite de réception du texte intégral</h5>
                    <span>30 Octobre 2021</span>
                  </li>
                  <li>
                    <h5>Acceptation définitive des textes</h5>
                    <span>10 Novembre 2021</span>
                  </li>
                  <li>
                    <h5>Date du colloque</h5>
                    <span>26 & 27 Novembre 2021</span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
  created(){
    //------------------------------------------
    let countDownDate = new Date("Nov 26, 2021 10:00:00").getTime();

    let x = setInterval(function() {

      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(document.getElementById("demo") !== null){
        document.getElementById("demo").innerHTML =
            "<div  style='display: flex;justify-content: space-evenly;flex-wrap: wrap; width: 60%'>"
            +"<div id='ha-ha-ha' style='margin: 2px; transform-origin: 50% 100%;  border-radius: 10px; background-color: rgba(255,255,255,0.17);width: 160px;height: 160px; box-shadow: 0px 0px 5px 5px #EEE; '><strong style=' line-height: 2; font-size: 2.94em;color: white; font-style: normal; font-weight: 700'>"+ days    + "</strong> <p style='position: relative; bottom: 30px; color: white; font-weight: bold '>jours  </p> " +"</div>"
            +"<div style='margin: 2px; transform-origin: 50% 100%;  border-radius: 10px; background-color: rgba(255,255,255,0.17);width: 160px;height: 160px; box-shadow: 0px 0px 5px 5px #EEE; '><strong style=' line-height: 2; font-size: 2.94em;color: white; font-style: normal; font-weight: 700'>"+ hours   + "</strong> <p style='position: relative; bottom: 30px; color: white; font-weight: bold '>heures </p> " +"</div>"
            +"<div style='margin: 2px; transform-origin: 50% 100%;  border-radius: 10px; background-color: rgba(255,255,255,0.17);width: 160px;height: 160px; box-shadow: 0px 0px 5px 5px #EEE; '><strong style=' line-height: 2; font-size: 2.94em;color: white; font-style: normal; font-weight: 700'>"+ minutes + "</strong> <p style='position: relative; bottom: 30px; color: white; font-weight: bold '>minutes</p> " +"</div>"
            +"<div style='margin: 2px; transform-origin: 50% 100%;  border-radius: 10px; background-color: rgba(255,255,255,0.17);width: 160px;height: 160px; box-shadow: 0px 0px 5px 5px #EEE; '><strong style=' line-height: 2; font-size: 2.94em;color: white; font-style: normal; font-weight: 700'>"+ seconds + "</strong> <p style='position: relative; bottom: 30px; color: white; font-weight: bold '>seconds</p> " +"</div>"
            +"</div>";
      }


      if (distance < 0) {
        clearInterval(x);
        document.querySelector(".ha-countdown-title").innerHTML = "Bienvenue dans TEC & Gestion";
        document.getElementById("demo").innerHTML = "";
      }
    }, 1000);

    //----------------------------------------------


  }
}

</script>


<style scoped>
.bgimg {
  height: 80%;
  background-position: center;
  background-size: cover;
  position: relative;
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
  color: black;
  font-weight: bold;
  overflow: hidden;
}
.middle{
  position: absolute;
  top: 20%;
  left: 0px;
  background-color: transparent;
  width: 100%;
  z-index: 10;
}
@media only screen and (max-width: 900px) {

  .middle{
    top: 0%;
  }
}
.ha-pop-up{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.34);
  z-index: 5;
}
.ha-coming-soon h1{
  font-weight: bold;
  font-size: 1.5em;
  color: white;
}

.ha-home-content{
  padding: 20px 30px;
  background-color: #f5f5f5;
}

.ha-home-content .ha-nb{
  position: relative;
  width: 80%;
  background-color: white;
  box-shadow: 0px 0px 3px 4px #e1e1e1;
  padding: 10px 10px 10px 30px;
}

.ha-home-content .ha-nb:before{
  content: "NB";
  position: absolute;
  left: -38px;
  top: -2px;
  width: 70px;
  height: 40px;
  text-align: center;
  background-color: red;
  color: white;
  font-weight: bold;
  padding: 5px;
  transform: rotate(-40deg);
  font-size: 20px;
}

@media only screen and (max-width: 900px)
{
  .ha-home-content .ha-nb{
    width: 100%;
  }
}

.ha-sub-content{
  padding: 10px;
}

.ha-objectif{
  padding: 15px;
}
.ha-objectif h1{
  font-weight: bold;
  color: #4267b2;
}
.ha-objectif p{
  font-size: 20px;
  text-indent: 50px;
  font-weight: 500;
}
.ha-informations{
  padding: 15px;
}
.ha-informations h1{
  font-weight: bold;
  color: #4267b2;
}
.ha-informations ul{
  list-style: none;
}
.ha-informations li{
  margin: 5px 0px;
  background-color: white;
  padding: 10px;
}
.ha-informations span{
  color: red;
}

.ha-old-date{
  text-decoration: line-through;
  margin-left: 15px;
  font-size: 14px;
  color: #4267b2 !important;
}

</style>