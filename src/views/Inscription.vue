<template>
  <div class="ha-inscription">
    <h2>Inscription</h2>

    <div class="ha-inscription-content">
      <h4>Formulaire d'inscription</h4>
      <ul>
        <li>
          <a href="#">Télécharger le formulaire d'inscription</a>
        </li>
      </ul>
      <h4>Frais d'inscription</h4>
      <table>
        <tr>
          <td>Etudiant/Doctorant</td>
          <td>   :  </td>
          <td>300 DH</td>
        </tr>
        <tr>
          <td>Enseignant Chercheur</td>
          <td>   :  </td>
          <td> 800 DH</td>
        </tr>
        <tr>
          <td>Autres</td>
          <td>   :  </td>
          <td>1200 DH</td>
        </tr>

      </table>
      <p class="text-danger">Les frais d’inscription comprennent: la documentation de la rencontre, les pauses café et le déjeuner</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Inscription"
}
</script>

<style scoped>

.ha-inscription{
  padding: 20px 30px;

}

.ha-inscription h2{
  font-weight: bold;
  color: #4267b2;
}

.ha-inscription-content{
  padding: 20px;
}
.ha-inscription-content ul{
  list-style: none;
}
.ha-inscription-content a{
  text-decoration: none;
  color: #2196f3;
}

</style>