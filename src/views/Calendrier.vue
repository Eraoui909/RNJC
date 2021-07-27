<template>
  <div class="ha-calendrier">
    <h1>Calendrier</h1>
    <div class="timeline">
      <div class="ha-container left">
        <div class="content">
          <h2>26 & 27 Novembre 2021</h2>
          <p>Date du colloque</p>
        </div>
      </div>
      <div class="ha-container right">
        <div class="content">
          <h2>30 Octobre 2021</h2>
          <p>Date limite de réception du texte intégral </p>
        </div>
      </div>
      <div class="ha-container left">
        <div class="content">
          <h2>30 septembre 2021</h2>
          <p>Notification du comité scientifique </p>
        </div>
      </div>
      <div class="ha-container right">
        <div class="content">
          <h2>15 Septembre 2021</h2>
          <p>Soumission des intentions de communication </p>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "Calendrier"
}
</script>

<style scoped>

.ha-calendrier{
  background-color: #e5e5e5;
  padding: 20px 30px;
}
.ha-calendrier h1{
  font-weight: bold;
  color: #4267b2;
}
.ha-calendrier p{
  font-size: 18px;
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.ha-container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.ha-container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid #FF9F55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the ha-container to the left */
.left {
  left: 0;
}

/* Place the ha-container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left ha-container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right ha-container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for ha-containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width ha-containers */
  .ha-container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .ha-container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after, .right::after {
    left: 15px;
  }

  /* Make all right ha-containers behave like the left ones */
  .right {
    left: 0%;
  }
}



</style>