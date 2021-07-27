<template>
  <div class="ha-procedure">
    <h1>Soumission</h1>
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
    <div class="ha-normes">
      <h1>Normes de redaction</h1>
      <div class="ha-normes-content">
        <div class="list-type">
          <ul class="ha-first">
            <li><a href="#">Les communications devront être envoyées sous format (Word, PDF).
              Elles peuvent être rédigées en langue française ou anglaise. </a></li>
            <li ><a href="#">Le format de soumission des textes de communications doit respecter les instructions suivantes : </a></li>
              <ul class="ha-second">
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
                  <ul class="ha-third">
                    <li><a href="#">Ouvrage : nom de l’auteur et initiale du prénom, date de publication, Titre de l’ouvrage, Editeur, Lieu d’édition.</a></li>
                    <li><a href="#">Article : nom de l’auteur et initiale du prénom, date de publication, « Titre de l’article », Titre de la revue, Vol. x, N°, pp.</a></li>
                  </ul>
              </ul>
          </ul>
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
    font-size: 2em;
  }
  .ha-procedure h2{
    font-size: 1.5em;
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

  .list-type{
    padding: 15px;
  }
  .list-type a{
    color: black;
    text-decoration: none;
  }
  .list-type .ha-first{
    font-size: 20px;
  }
  .list-type .ha-second{
      font-size: 16px;
      color: #999;
    }
  .list-type .ha-third{
      font-size: 14px;
      color: #EEE;
    }

  .ha-conclusion{
    margin: 20px auto;
    padding: 15px;
    background-color: #f3f3f3;
    box-shadow: 0px 0px 8px 2px gray;
    font-size: 20px;
  }
  .ha-conclusion a{
    text-decoration: none;
  }

</style>