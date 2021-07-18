<template>
  <div class="home">

    <div class="ha-coming-soon ">
      <div class="bgimg">
        <center>
          <div class="middle">
            <h1 class="ha-countdown-title" style="text-shadow: 2px 2px #EEE;">Il reste pour le début de colloque</h1>
            <hr>
            <p id="demo"></p>
          </div>
        </center>
      </div>
      <div class="ha-home-content">

        <section class="ha-nb">
          <span style="margin-left: 20px;font-size: 17px">Le colloque aura lieu en présentiel si la situation pandémique le permet, ou, en distanciel, le cas contraire.</span>
        </section>

        <section class="ha-fiche">
          <h1>Fiche descriptive</h1>
          <center>
            <img src="../assets/pictures/fiche.png" alt="fiche">
          </center>
        </section>

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

      document.getElementById("demo").innerHTML =
          "<div  style='display: flex;justify-content: space-evenly;flex-wrap: wrap; width: 60%'>"
          +"<div style='margin: 2px; transform-origin: 50% 100%;  border-radius: 10px; background-color: transparent;width: 200px;height: 180px; box-shadow: 0px 0px 5px 5px #EEE; '><strong style=' line-height: 2; font-size: 2.94em;color: white; font-style: normal; font-weight: 700'>"+ days    + "</strong> <p style='position: relative; bottom: 30px; color: white; font-weight: bold '>jours  </p> " +"</div>"
          +"<div style='margin: 2px; transform-origin: 50% 100%;  border-radius: 10px; background-color: transparent;width: 200px;height: 180px; box-shadow: 0px 0px 5px 5px #EEE; '><strong style=' line-height: 2; font-size: 2.94em;color: white; font-style: normal; font-weight: 700'>"+ hours   + "</strong> <p style='position: relative; bottom: 30px; color: white; font-weight: bold '>heures </p> " +"</div>"
          +"<div style='margin: 2px; transform-origin: 50% 100%;  border-radius: 10px; background-color: transparent;width: 200px;height: 180px; box-shadow: 0px 0px 5px 5px #EEE; '><strong style=' line-height: 2; font-size: 2.94em;color: white; font-style: normal; font-weight: 700'>"+ minutes + "</strong> <p style='position: relative; bottom: 30px; color: white; font-weight: bold '>minutes</p> " +"</div>"
          +"<div style='margin: 2px; transform-origin: 50% 100%;  border-radius: 10px; background-color: transparent;width: 200px;height: 180px; box-shadow: 0px 0px 5px 5px #EEE; '><strong style=' line-height: 2; font-size: 2.94em;color: white; font-style: normal; font-weight: 700'>"+ seconds + "</strong> <p style='position: relative; bottom: 30px; color: white; font-weight: bold '>seconds</p> " +"</div>"
          +"</div>";

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
  background-image: url("../assets/pictures/engrenage.jpg");
  height: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
  padding: 20px;
  color: black;
  font-weight: bold;
}

.ha-coming-soon h1{
  font-weight: bold;
  font-size: 2.5em;
  color: white;
}

.ha-home-content{
  padding: 20px 30px;
}

.ha-home-content .ha-nb{
  position: relative;
  width: 80%;
  background-color: #EEE;
  box-shadow: 0px 0px 3px 4px #bfbfbf;
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

.ha-fiche{
  padding: 30px;
}
.ha-fiche h1{
  font-weight: bold;
  color: #4267b2;
}
.ha-fiche img{
  margin: 10px auto;
  width: 50%;
}


</style>