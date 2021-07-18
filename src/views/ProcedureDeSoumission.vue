<template>
  <div class="ha-procedure">
    <h1>Procédure de soumission</h1>
    <div class="ha-procedure-n">
      <div class="ha-procedure-1">
        <h2>L’intention de communication</h2>
        <div class="list-type4">
          <ol>
            <li><a href="#">Maximum une page rédigée selon le format Times New Roman Word police12</a></li>
            <li><a href="#">interligne 1.5 (marges : 2.5)</a></li>
            <li><a href="#">mots clés max 5</a></li>
          </ol>
        </div>
      </div>
      <div class="ha-procedure-2">
        <h2>Le Texte intégral </h2>
        <div class="list-type4">
          <ol>
            <li><a href="#">Les communications peuvent être soumises en français ou en anglais.</a></li>
            <li><a href="#">Les textes des communications doivent être envoyés sous format électronique à l’adresse émail suivante :
              <a href="mailto:colloqinnovpedag21@gmail.com">colloqinnovpedag21@gmail.com</a></a></li>
          </ol>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProcedureDeSoumission"
}
</script>

<style scoped>

  .ha-procedure{
    padding: 20px 30px;
  }
  .ha-procedure h1{
    font-weight: bold;
    color: #4267b2;
  }
  .ha-procedure-n{
    width: 80%;
    margin: 10px auto;
    padding: 15px;
  }
  .ha-procedure-n ul{
    list-style: none;
  }
  .ha-procedure-n li{
    line-height: 2;
    font-size: 18px;
  }

  .list-type4{
    width:90%;
    margin:0 auto;
  }

  .list-type4 ol{
    counter-reset: li;
    list-style: none;
    *list-style: decimal;
    font-size: 15px;
    font-family: 'Raleway', sans-serif;
    padding: 0;
    margin-bottom: 4em;
  }
  .list-type4 a{
    position: relative;
    display: block;
    padding: .4em .4em .4em 2em;
    *padding: .4em;
    margin: .5em 0;
    background: #5975D9;
    color: white;
    text-decoration: none;
    box-shadow:inset 0.5em 0 black;
    -webkit-transition: box-shadow 1s; /* For Safari 3.1 to 6.0 */
    transition: box-shadow 1s;
  }

  .list-type4 a:hover{
    box-shadow:inset 2em 0 black;
  }

</style>