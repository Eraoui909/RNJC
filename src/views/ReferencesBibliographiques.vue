<template>
  <div class="ha-references">
    <h1>Références bibliographiques</h1>
    <div class="list-type4">
      <ol>
        <li><a href="#">ALBERO, B., LINARD, M. & ROBIN, J.-Y. (2008). Petite fabrique de l’innovation à l’université. Quatre parcours de pionniers. Paris : L’Harmattan.</a></li>
        <li><a href="#">BECHARD, J. & Pelletier, P. (2004). Les universités traditionnelles: à l'heure des innovations pédagogiques? Gestion, 29(1), 48-55. </a></li>
        <li><a href="#">BEDARD, D BECHARD, J. (2009). Innover dans l’enseignement supérieur. Paris, France : Presses Universitaires de France.</a></li>
        <li><a href="#">BLOCH, C.  & BUGGE, M. (2013), Public sector innovation - From theory to measurement, Structural Change and Economic Dynamics, 27, 133-145</a></li>
        <li><a href="#">BLONS-PIERRE, Catherine. (2016) « Mobilités et compétences en langues étrangères et dans le domaine interculturel: outils et réflexions pour la description, l’évaluation et la reconnaissance de ces compétences », Journal of international Mobility, vol. 4, no. 1, pp. 91-108.</a></li>
        <li><a href="#">CLOËT, Héloïse, et Frank BOURNOIS. (2011) « Cartographie de la valeur ajoutée du coaching », Revue de gestion des ressources humaines, vol. 79, no. 1, pp. 4-23. </a></li>
        <li><a href="#">COULOMBE, D., GUILBERT, L. et LACOMBE, N. (2000). Vécu et contraintes lors de l’application d’une nouvelle approche pédagogique. Canadian Journal of Education. </a></li>
        <li><a href="#">CROS, F. (1997). L’innovation en éducation et en formation. Revue française de pédagogie, 118, 127-156.</a></li>
        <li><a href="#">CROS, F. (2007). L'agir innovationnel : Entre créativité et formation. Louvain-la-Neuve, Belgique: De Boeck Supérieur.</a></li>
        <li><a href="#">DAMANPOUR, C. et GOPALAKRISHNAN S. (1998). Theories of Organizational Structure and innovation Adoption: The role of Environmental change. Journal of Engineering and Technology Management, 15(1), 1-24.</a></li>
        <li><a href="#">DAOUD Miloud et TAGHZOUTI Abdellatif, (2020) “ l’enseignement du management : pour une pédagogie qui développe l’employabilité des étudiants) Journal d’économie , de management, d’environement et de droit (JEMED), ISSN 2605-6461, volume 3 N°3 Novembre 2020.	</a></li>
        <li><a href="#">FAURE, Frédéric, et Alain CUCCHI. (2020)  « Quelle caractérisation du savoir-être ? Une revue de la littérature en deux temps », RIMHE : Revue Interdisciplinaire Management, Homme & Entreprise, vol. 39, vol. 9, no. 2, pp. 3-25.</a></li>
        <li><a href="#">HOFAIDHLLAOUI, Mahrane, et ROGER Alain (2014). « Favoriser le développement de l'employabilité : un enjeu pour les individus et pour les organisations », Revue de gestion des ressources humaines, vol. 93, no. 3, pp. 32-53. </a></li>
        <li><a href="#">LEMAITRE, D. (2018).  “L’innovation pédagogique en question: analyse des discours de praticiens », Revue internationale de pédagogie de l’enseignement supérieur, 34. </a></li>
        <li><a href="#">OECD (2014), Measuring Innovation in Education: A New Perspective, Educational Research and Innovation, OECD Publishing.</a></li>
        <li><a href="#">ROULIN, Valentine, Anne-Claude ALLIN-PFISTER, et Denis BERTHIAUME. (2017) Comment évaluer les apprentissages dans l’enseignement supérieur professionnalisant ? Regards d’enseignants. De Boeck Supérieur.</a></li>
        <li><a href="#">TARDIF, Jacques, et al., Organiser la formation à partir des compétences : Un pari gagnant pour l’apprentissage dans le supérieur (Pédagogies en développement) (2020), Edition De Boeck, </a></li>
        <li><a href="#">VINCENT-LANCRIN, S., et al. (2019), Measuring Innovation in Education 2019: What Has Changed in the Classroom? Educational Research and Innovation, OECD Publishing, Paris.</a></li>
        <li><a href="#">                 ZERROUQI, Z. (2015). Les performances du système éducatif marocain. Revue internationale d’éducation de Sèvres, 70, 22-28. </a></li>
      </ol>
    </div>

  </div>
</template>

<script>
export default {
  name: "ReferencesBibliographiques"
}
</script>

<style scoped>

.ha-references{
  padding: 20px 30px;
}
.ha-references h1{
  font-weight: bold;
  color: #4267b2;
  margin-bottom: 30px;
}

.list-type4{
  width:90%;
  margin:20px auto;
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
  background: #7289db;
  color: white;
  text-decoration: none;
  box-shadow:inset 0.5em 0 black;
  -webkit-transition: box-shadow 1s; /* For Safari 3.1 to 6.0 */
  transition: box-shadow 1s;
  font-size: 16px;
}

.list-type4 a:hover{
  box-shadow:inset 2em 0 black;
  transform: scale(1.1);
}

</style>