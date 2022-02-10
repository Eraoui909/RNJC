<template>
  <div class="ha-equipe">
    <h1>Comités</h1>

    <div style="padding: 15px">

      <div class="row">

        <div class="col-12">
          <strong class="ha-click-event" v-on:click="fadeList('.ha-honneur-list')">Comité d’honneur</strong>
          <div class="list-type2 ha-honneur-list">
            <ol>
              <li ><a href="#">MRABET Radouane<span class="ha-custom-badge text-right">Président de l'Université Sidi Mohammed Ben Abdallah, Fès</span> </a></li>
              <li ><a href="#">IJJAALI Mustapha<span class="ha-custom-badge text-right">Doyen de la Faculté des Sciences et Techniques, Fès</span> </a></li>
            </ol>
          </div>
        </div>
        <hr>

        <div class="col-12">
          <strong class="ha-click-event" v-on:click="fadeList('.ha-chairs-list')">Président</strong>
          <div class="list-type2 ha-chairs-list">
            <ol>
              <li ><a href="#">MRABTI Fatiha<span class="ha-custom-badge text-right"></span> </a></li>
            </ol>
          </div>
        </div>
        <hr>

        <div class="col-12">
          <strong class="ha-click-event" v-on:click="fadeList('.ha-co-chairs-list')">Vices-président</strong>
          <div class="list-type2 ha-co-chairs-list">
            <ol>
              <li ><a href="#">ALAMI HASSANI Aicha<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">ABARKAN Mouna<span class="ha-custom-badge text-right"></span> </a></li>
            </ol>
          </div>
        </div>
        <hr>


        <div class="col-12">
          <strong class="ha-click-event" v-on:click="fadeList('.ha-organisation-list')">Comité local</strong>
          <div class="list-type2 ha-organisation-list">
            <ol>
              <li ><a href="#">BEGDOURI Ahlam<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">ACHIBAT Taoufiq<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">MRABTI Fatiha<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">ALAMI HASSANI Aicha<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">ABARKANE Mouna<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">AHJYAJE Fatima Zahra<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">LAHBABI Mohammed<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">ABDI Farid<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">BEN ABBOU Rachid<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">GHENNIOUI Hicham<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">ECHATOUI Nor-Said<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">LAMCHARFI Taj-dine<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">ZARED Kamal<span class="ha-custom-badge text-right"></span> </a></li>
            </ol>
          </div>
        </div>
        <hr>

        <div class="col-12">
          <strong class="ha-click-event" v-on:click="fadeList('.ha-doctoral-list')">Comité doctoral</strong>
          <div class="list-type2 ha-doctoral-list">
            <ol>
              <li ><a href="#">GOUITAA Najoua<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">EL HAJJI NABIH Meryem<span class="ha-custom-badge text-right"></span> </a></li>
            </ol>
          </div>
        </div>
        <hr>

        <div class="col-12">
          <strong class="ha-click-event" v-on:click="fadeList('.ha-technique-list')">Comité technique</strong>
          <div class="list-type2 ha-technique-list">
            <ol>
              <li ><a href="#">MRABTI FATIHA<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">ALAMI HASSANI Aicha<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">ABARKAN Mouna<span class="ha-custom-badge text-right"></span> </a></li>
              <li ><a href="#">ERAOUI Hamza<span class="ha-custom-badge text-right"></span> </a></li>
            </ol>
          </div>
        </div>
        <hr>

        <div class="col-12">
          <strong class="ha-click-event" v-on:click="fadeList('.ha-science-list')">Comité scientifique </strong>
          <div class="list-type2 ha-science-list">
            <ol>
              <li ><a href="#">ABBASSI Latifa<span class="ha-custom-badge text-right">ENS Fès</span> </a></li>
              <li ><a href="#">ABDI Farid<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">BEN ABBOU Rachid<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">BOUAYADE Mfadal<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">ECHATOUI Nor-Said<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">EL AMRANI EL IDRISSI Najiba<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">EL OUAZZANI Nabih<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">IDRISSI KANDRI Noureddine<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">KABBAJ Hassane<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">LAHBABI Mohemmed<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">LAMCHARFI Taj-dine<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">MRABTI Fatiha<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">TAHRI Driss<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">ZENKOUAR Khalid<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">ZOUAK Mohcine<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">ABARKANE Mouna<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">ABBAD  Khalid<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">AHJYAJE Fatima Zahra<span class="ha-custom-badge text-right">FP Taza</span> </a></li>
              <li ><a href="#">BOUSHABA Abdelali<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">CHAKER Ilham<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">GHENNIOUI Hicham<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">NAJAH Said<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">ALAMI HASSANI Aicha<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">EL BASSET Abdelhalim<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">ZARED Kamal<span class="ha-custom-badge text-right">FST Fès</span> </a></li>
              <li ><a href="#">AMARASS Mostapha<span class="ha-custom-badge text-right">FST Fès</span> </a></li>

            </ol>
          </div>
        </div>
        <hr>

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
        selector[i].style.display = "none";
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
    font-size: 2em;
  }
  .ha-equipe strong{
    font-size: 22px;
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

  @media only screen and (max-width: 700px) {
    .list-type2{
      width: 100%;
    }
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