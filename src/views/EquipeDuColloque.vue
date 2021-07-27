<template>
  <div class="ha-equipe">
    <h1>Equipe du Colloque</h1>

    <div style="padding: 15px">

      <div class="row">
        <div class="col">
          <strong class="ha-click-event" v-on:click="fadeList('.ha-coordonnateurs-list')">Coordonnateurs et responsables du colloque</strong>
          <div class="list-type2 ha-coordonnateurs-list">
            <ol>
              <li ><a href="#"> Jamal Eddine HAZEM <span class="ha-custom-badge text-right">FST FES</span> </a></li>
              <li ><a href="#"> Samira SLAOUI <span class="ha-custom-badge">FST FES</span> </a></li>
              <li ><a href="#"> Asmae BELKHOU <span class="ha-custom-badge">EST FES</span> </a></li>
              <li ><a href="#"> Hasna BOUTOUIL <span class="ha-custom-badge">FST FES</span> </a></li>
            </ol>
          </div>
        </div>
        <div class="col">
          <strong class="ha-click-event" v-on:click="fadeList('.ha-honneur-list')">Comité d’honneur</strong>
          <div class="list-type2 ha-honneur-list">
            <ol>
              <li ><a href="#"> MRABET Radouane  <span class="ha-custom-badge text-right">President USMBA</span> </a></li>
              <li ><a href="#"> IJJAALI Mustapha   <span class="ha-custom-badge">Doyen FST FES</span> </a></li>
            </ol>
          </div>
        </div>

      </div>

      <div class="row">
        <div class="col">
          <strong class="ha-click-event" v-on:click="fadeList('.ha-commite-technique-list')">Comité Technique</strong>
          <div class="list-type2 ha-commite-technique-list">
            <ol>
            <li class=""><a href="#">MRABTI Fatiha  <span class="ha-custom-badge">FST FES</span> </a></li>
            <li class=""><a href="#">ERAOUI Hamza  <span class="ha-custom-badge">FST FES</span> </a></li>
          </ol>
          </div>
        </div>
        <div class="col">
          <strong class="ha-click-event" v-on:click="fadeList('.ha-commite-orga-list')">Comité d’organisation</strong>
          <div class="list-type2 ha-commite-orga-list">
            <ol>
              <li class=""><a href="#"> BEGDOURI Ahlam <span class="ha-custom-badge">FST FES</span> </a> </li>
              <li class=""><a href="#"> ACHIBAT Taoufiq <span class="ha-custom-badge">FST FES</span> </a> </li>
              <li class=""><a href="#"> BELKHOU Asmae <span class="ha-custom-badge">EST FES</span> </a> </li>
              <li class=""><a href="#"> BENLAHCEN Maryam <span class="ha-custom-badge">FST FES</span> </a> </li>
              <li class=""><a href="#"> BOUTOUIL Hasna <span class="ha-custom-badge">FST FES</span> </a> </li>
              <li class=""><a href="#"> ELADOULI Nissrine <span class="ha-custom-badge">FST FES</span> </a> </li>
              <li class=""><a href="#"> EL HARTI Khadija  <span class="ha-custom-badge">FST FES</span> </a> </li>
              <li class=""><a href="#"> HAZM Jamal Eddine <span class="ha-custom-badge">FST FES</span> </a> </li>
              <li class=""><a href="#"> OUAZZANI Wahiba <span class="ha-custom-badge">Chargée de coopération, Institut Français de Fès</span> </a> </li>
              <li class=""><a href="#"> REMMAL Salouwa <span class="ha-custom-badge">FSDM FES</span> </a> </li>
              <li class=""><a href="#"> SLAOUI Samira  <span class="ha-custom-badge">FST FES</span> </a> </li>
              <li class=""><a href="#"> ABOUTAJEDDINE Imane <span class="ha-custom-badge">Doctorante FST Fès</span> </a> </li>
              <li class=""><a href="#"> EL MAHI Reda  <span class="ha-custom-badge"> Doctorant ENCG Fès</span> </a> </li>
              <li class=""><a href="#"> NEJJARI Ridouan    <span class="ha-custom-badge">Doctorant ENCG Fès</span> </a> </li>
              <li class=""><a href="#"> SQUALLI Mouna <span class="ha-custom-badge">Doctorante FST Fès</span> </a> </li>
              <li class=""><a href="#"> ZINEALABIDINE Meryem  <span class="ha-custom-badge">Doctorante FSJES Fès</span> </a> </li>
            </ol>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <strong class="ha-click-event" v-on:click="fadeList('.ha-commite-science-list')">Comité Scientifique </strong>
          <div class="list-type2 ha-commite-science-list">
            <ol>
              <li class=""><a href="#"> ABDELBAKI Noureddine <span class="ha-custom-badge">UIT KENITRA</span> </a> </li>
              <li class=""><a href="#"> ABOUTAJEDDINE Ahmed  <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> AKKI El-Houcine <span class="ha-custom-badge">Académie d’Amiens, Haut-de-France, France</span> </a> </li>
              <li class=""><a href="#"> ALIOUAT Boualem <span class="ha-custom-badge">Université Sophia Antipolis, Nice, France</span> </a> </li>
              <li class=""><a href="#"> BELARBI Mokhtari <span class="ha-custom-badge">UMI MEKNES</span> </a> </li>
              <li class=""><a href="#"> BENAMAR Mohamed  <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> BERRICHI   Abdelouahed   <span class="ha-custom-badge"> UMI OUJDA</span> </a> </li>
              <li class=""><a href="#"> DAOUD Miloud  <span class="ha-custom-badge"> USMBA FES</span> </a> </li>
              <li class=""><a href="#"> DRISSI Zineb <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> EDDILANI Oumhani <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> EL AMRANI ELIDRISSI Najiba <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> EL AZOUZI Abdelmounïm  <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> EL HIMANI Abdelghani <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> EL MALLOUKI Lhoussain  <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> ERRABIH Samir <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> GALOUJ Feiz  <span class="ha-custom-badge">USTL LILLE, FRANCE</span> </a> </li>
              <li class=""><a href="#"> NMILI Mohammed  <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> GALOUJ Kamal <span class="ha-custom-badge">Université Paris 13</span> </a> </li>
              <li class=""><a href="#"> GHARBI Jamal <span class="ha-custom-badge">Université du littoral Côte d’Opale, France</span> </a> </li>
              <li class=""><a href="#"> GUENNOUN HASSANI Faïza <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> HAZM Jamal Eddine <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> IBRAHIMI Mohammed <span class="ha-custom-badge">UH2 CASABLANCA</span> </a> </li>
              <li class=""><a href="#"> KOJMANE Jihane <span class="ha-custom-badge">ESI2A, FES</span> </a> </li>
              <li class=""><a href="#"> MRABTI Fatiha <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> OULAD SEGUIR Khalid <span class="ha-custom-badge">UAE TANGER</span> </a> </li>
              <li class=""><a href="#"> ROCHET Claude <span class="ha-custom-badge">Université de Versailles, Saint-Quentin-en-Yvelines</span> </a> </li>
              <li class=""><a href="#"> SAIDI Abdelouahed  <span class="ha-custom-badge">Université Sudbury, Canada</span> </a> </li>
              <li class=""><a href="#"> SKOURI Abdelhamid <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> SLAOUI Samira <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> TAGHZOUTI Abdellatif  <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> TAMNINE Larbi  <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> YAZAMI KHADIRI Bahija <span class="ha-custom-badge">USMBA FES</span> </a> </li>
              <li class=""><a href="#"> ZAMMAR Rachid <span class="ha-custom-badge">UMV RABAT Agdal</span> </a> </li>
            </ol>
          </div>
        </div>
        <div class="col">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "EquipeDuColloque",
  methods:{
    fadeList: function (className){
      let selector = document.querySelector(className);
      let  disp = selector.style.display;
      if(disp === 'none')
      {
        selector.style.display = "block";
      }else{
        selector.style.display = "none";
      }
    }
  },
  created() {

    setTimeout(function () {
      let selector = document.querySelectorAll('.list-type2');
      console.log(selector);
      for (let i=0;i<selector.length;i++){
        //selector[i].style.display = "none";
      }
    },2000);
  }
}
</script>

<style scoped>

  .ha-equipe{
    padding: 20px 30px;
  }
  .ha-equipe h1{
    font-weight: bold;
    color: #4267b2;
  }
  .ha-equipe strong{
    font-size: 24px;
    cursor: pointer;
    padding: 15px;
  }


  .ha-equipe .list-group{
    margin: 20px 0px;
  }

  .ha-equipe .ha-custom-badge{
    position: absolute;
    right: 10px;
    top: 2px;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 2px;
    margin-left: 15px;
    background-color: #EEE;
  }
  @media only screen and (max-width: 780px){
    .ha-equipe .ha-custom-badge {
      position: relative;
    }
  }
  .ha-equipe .ha-custom-badge:hover{
    background-color: gray;
    color: white;
  }


  .list-type2{
    width:90%;
    margin:0 auto;
    display: block;
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
</style>