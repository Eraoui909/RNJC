<template>
  <div class="ha-normes">
    <h1>Normes de redaction</h1>
    <div class="ha-normes-content">
      <div class="list-type5">
        <ol>
          <li><a href="#">Les communications devront être envoyées sous format (Word, PDF).
            Elles peuvent être rédigées en langue française ou anglaise. </a></li>
          <li @click="fadList()"><a href="#">Le format de soumission des textes de communications doit respecter les instructions suivantes : </a>
          </li>
        </ol>
      </div>
      <div class="list-type4">
        <ol>
          <li><a href="#">La première page contiendra les noms et statut des auteurs, établissement, université d’affiliation, laboratoire et le titre de la communication. (Téléphone et adresse électronique)</a></li>
          <li><a href="#">La deuxième page ne contiendra que le titre de la communication, le résumé dans la langue de l’article et dans une autre langue parmi les langues retenues pour les communications et 3 à 5 mots clés.</a></li>
          <li><a href="#">Le résumé : 300 mots maximum</a></li>
          <li><a href="#">Le texte sous format Word, caractères Times 12, format, A4, marges de 2,5 cm, 1,5 ligne, 15 pages maximum y compris : tableaux, schémas, images.</a></li>
          <li><a href="#">Les titres suivent une numérotation simple : 1., 1.1., 1.1.1., etc.</a></li>
          <li><a href="#">Titre : times 16 en gras</a></li>
          <li><a href="#">Nom de l’auteur : times 12 en gras</a></li>
          <li><a href="#">Résumé en gras en 14, puis contenu en times 12</a></li>
          <li><a href="#">Introduction : Times 14 en gras</a></li>
          <li><a href="#">Titre 1. : Times 14 en gras</a></li>
          <li><a href="#">Titres1.1. : Times 12 en gras</a></li>
          <li><a href="#">Conclusion : Times 14 en gras</a></li>
          <li><a href="#">
            Bibliographie : Times 14 en gras, puis contenu en times 12, suivant le modèle suivant :
          </a></li>
        </ol>
      </div>
      <div class="list-type2">
        <ol>
          <li><a href="#">Ouvrage : nom de l’auteur et initiale du prénom, date de publication, Titre de l’ouvrage, Editeur, Lieu d’édition.</a></li>
          <li><a href="#">Article : nom de l’auteur et initiale du prénom, date de publication, « Titre de l’article », Titre de la revue, Vol. x, N°, pp.</a></li>
        </ol>
      </div>
      <div class="ha-conclusion">
        <p>
          Les meilleures communications du colloque feront l’objet d’une publication
          Pour toutes informations supplémentaires, veuillez-vous adresser à :
          <a href="mailto:colloqinnovpedag21@gmail.com">colloqinnovpedag21@gmail.com</a>
        </p>
        Contacts : Samira SLAOUI    : <a href="tel:0663321377">06 63 32 13 77</a>
        Hasna BOUTOUIL : <a href="tel:0672739463">06 72 73 94 63</a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NormesDeRedaction",
  data: function (){
    return{
      displayy: true,
    }
  },
  methods: {
    fadList(){
      if(this.displayy === true){
        document.querySelector(".list-type4").style.display = "none";
        document.querySelector(".list-type2").style.display = "none";
        this.displayy = false;
      }else{
        document.querySelector(".list-type4").style.display = "block";
        document.querySelector(".list-type2").style.display = "block";
        this.displayy = true;
      }
    },
  }
}
</script>

<style scoped>

.ha-normes{
  padding: 20px 30px;
}
.ha-normes h1{
  font-weight: bold;
  color: #4267b2;
}

.ha-normes-content{
  padding: 15px;
  width: 100%;
  margin: 20px auto;
}

.list-type5{
  width:80%;
  margin:0 auto;
}
.list-type5 ol {
  list-style-type: none;
  list-style-type: decimal !ie; /*IE 7- hack*/
  margin: 0;
  margin-left: 1em;
  padding: 0;
  counter-reset: li-counter;
}
.list-type5 ol li{
  position: relative;
  margin-bottom: 1.5em;
  padding: 0.5em;
  background-color: #F0D756;
  padding-left: 58px;
}

.list-type5 a{
  text-decoration:none;
  color:black;
  font-size:18px;
  font-family: 'Raleway', sans-serif;
}

.list-type5 li:hover{
  box-shadow:inset -1em 0 #6CD6CC;
  -webkit-transition: box-shadow 0.5s; /* For Safari 3.1 to 6.0 */
  transition: box-shadow 0.5s;
}

.list-type5 ol li:before {
  position: absolute;
  top: -0.3em;
  left: -0.5em;
  width: 1.8em;
  height: 1.2em;
  font-size: 2em;
  line-height: 1.2;
  font-weight: bold;
  text-align: center;
  color: white;
  background-color: #6CD6CC;
  transform: rotate(-20deg);
  -ms-transform: rotate(-20deg);
  -webkit-transform: rotate(-20deg);
  z-index: 99;
  overflow: hidden;
  content: counter(li-counter);
  counter-increment: li-counter;
}


.list-type4{
  width:70%;
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
  transform: scale(1.1);
}

.list-type2{
  width:60%;
  margin:0 auto;
  position: relative;
  top: -56px;
}

.list-type2 ol{
  counter-reset: li;
  list-style: none;
  *list-style: decimal;
  font-size: 15px;
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
  background: #FC756F;
  color: #444;
  text-decoration: none;
  transition: all .2s ease-in-out;
}

.list-type2 a:hover{
  background: #d6d4d4;
  text-decoration:none;
  transform: scale(1.1);
}

.list-type2 a:before{
  content: counter(li);
  counter-increment: li;
  position: absolute;
  left: -1.3em;
  top: 50%;
  margin-top: -1.3em;
  background:#FC756F;
  height: 2em;
  width: 2em;
  line-height: 2em;
  border: .3em solid #fff;
  text-align: center;
  font-weight: bold;
  color:#FFF;
}

.ha-conclusion{
  margin: 20px auto;
  padding: 15px;
  background-color: #EEE;
  box-shadow: 0px 0px 8px 2px gray;
  font-size: 20px;
}
.ha-conclusion a{
  text-decoration: none;
}
</style>