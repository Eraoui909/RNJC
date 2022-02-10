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
                <img src="../assets/pictures/FST-fes.jpg" height="450px" width="90%" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/pictures/Al-Qarawiyyin-University.jpg" height="450px" width="90%" class="d-block w-100" alt="Al-Qarawiyyin-University">
              </div>
            </div>
          </div>
          <div class="middle">
            <h1 class="ha-countdown-title" >5<sup>ÉME</sup> <strong>R</strong>ENCONTRE <strong>N</strong>ATIONALE DES <strong>J</strong>EUNES <strong>C</strong>HERCHEURS EN <strong>S</strong>CIENCES DE L'<strong>I</strong>NGÉNIEUR</h1>
            <hr>

          </div>
        </center>
      </div>
      <div class="ha-home-content">

<!--        <section class="ha-nb">
          <span style="margin-left: 20px;font-size: 17px">Le colloque aura lieu en présentiel si la situation pandémique
            le permet, ou, à distance, le cas contraire.</span>
        </section> -->

        <div class="ha-sub-content">
          <div class="row">
            <div class="col-md-7">
              <section class="ha-objectif">
                <h1>OBJECTIF</h1>
                <p align="justify">
                  La Rencontre Nationale des Jeunes Chercheurs en Sciences de l’Ingénieur RNJC’2022 s&#39;adresse
                  à tous les étudiants en cycle doctorale des différents laboratoires nationaux. Cette rencontre est
                  l&#39;occasion pour chaque participant de présenter ses travaux de recherche dans une ambiance
                  conviviale et de partager avec ses collègues une vue d&#39;ensemble des différentes recherches
                  menées à l&#39;heure actuelle dans sa spécialité et dans des domaines proches. C’est aussi un lieu de
                  partage d’expériences entre les jeunes chercheurs, doctorants et industriels s’intéressant aux
                  nouvelles technologies de l’information et de communication et au domaine de génie électrique.
                  En effet, il s’agit de créer une occasion de rencontre pour établir des collaborations de
                  partenariat entre les chercheurs universitaires avec les industriels et les opérateurs socio-
                  économique à travers le montage de projets d&#39;intérêt commun.
                </p>
              </section>
              <section class="ha-thematique">
                <h1>THÉMATIQUES</h1>
                <div class="list-type2 ha-thematique-list">
                  <ol>
                    <li ><a href="#" style="text-transform: uppercase;">Ingenierie des matériaux et Applications</a></li>
                    <li ><a href="#" style="text-transform: uppercase;">Matériaux pour l'environnement</a></li>
                    <li ><a href="#" style="text-transform: uppercase;">Informatique et Systèmes intelligent</a></li>
                    <li ><a href="#" style="text-transform: uppercase;">Systèmes embarqués</a></li>
                    <li ><a href="#" style="text-transform: uppercase;">Microélectronique</a></li>
                    <li ><a href="#" style="text-transform: uppercase;">Compatibilité ElectroMagnétique (CEM)</a></li>
                    <li ><a href="#" style="text-transform: uppercase;">Théorie de l'Information</a></li>
                    <li ><a href="#" style="text-transform: uppercase;">télecom & Réseaux cognitifs</a></li>
                    <li ><a href="#" style="text-transform: uppercase;">Energies renouvelables et RESEAUX ELECTRIQUES INTELLIGENTS</a></li>
                  </ol>
                </div>
              </section>
            </div>
            <div class="col-md-5">
              <div class="ha-informations">
                <h1>INFORMATIONS</h1>
                <ul>

                  <li>
                    <h5>Date de conférence</h5>
                    <span>18-19 Mai 2022</span>
                  </li>

                  <li>
                    <h5>Date limite de soummission</h5>
                    <span>2 Avril 2022</span>
                  </li>

                  <li>
                    <h5>Date de notification d'accéptation</h5>
                    <span>10 Avril 2022</span>
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
    //let countDownDate = new Date("Nov 26, 2021 10:00:00").getTime();

    /*let x = setInterval(function() {

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
    }, 1000); */

    //----------------------------------------------


  }
}

</script>


<style scoped>
.bgimg {
  height: 320px;
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
  top: 33%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: transparent;
  width: 80%;
  z-index: 10;
}
@media only screen and (max-width: 900px) {

  .middle{
    font-size: 18px;
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

.ha-thematique{
  padding: 15px;
}
.ha-thematique h1{
  font-weight: bold;
  color: #4267b2;
}

.list-type2 ol{
  counter-reset: li;
  list-style: none;
  *list-style: decimal;
  font-size: 17px;
  font-family: 'Raleway', sans-serif;
  padding: 0;
  margin-bottom: 4em;
}

.list-type2 ol ol{
  margin: 0 0 0 2em;
}

.list-type2 a{
  position: relative;
  display: block;
  padding: .4em .4em .4em 2em;
  *padding: .4em;
  margin: .5em 0;
  background: #f5f5f5;
  color: #444;
  text-decoration: none;
  transition: all .2s ease-in-out;
}



.list-type2 a:before{
  content: "●";
  position: absolute;
  left: -1.3em;
  top: 50%;
  margin-top: -1.3em;
  background: #eeeeee;
  height: 2em;
  width: 2em;
  line-height: 1.5em;
  border: .3em solid #fff;
  text-align: center;
  font-weight: bold;
  color: gray;
}

.ha-thematique-list{
  margin-left: 50px;
  padding: 6px;
}
@media only screen and (max-width: 600px){

  .ha-thematique-list{
    margin-left: 20px;
    padding: 2px;
  }

}

</style>