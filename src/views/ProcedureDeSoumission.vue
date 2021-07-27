<template>
  <div class="ha-procedure">
    <h1>Procédure de soumission</h1>
    <div class="ha-procedure-n">
      <div class="ha-procedure-1">
        <h2>L’intention de communication</h2>
        <div class="list-type2">
          <ol>
            <li><a href="#">Maximum une page rédigée selon le format Times New Roman Word police12</a></li>
            <li><a href="#">interligne 1.5 (marges : 2.5)</a></li>
            <li><a href="#">mots clés max 5</a></li>
          </ol>
        </div>
      </div>
      <div class="ha-procedure-2">
        <h2>Le Texte intégral </h2>
        <div class="list-type2">
          <ol>
            <li><a href="#">Les communications peuvent être soumises en français ou en anglais.</a></li>
            <li><a href="#">Les textes des communications doivent être envoyés sous format électronique à l’adresse émail suivante :
              colloqinnovpedag21@gmail.com</a></li>
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