<template>
  <div class="ha-contact">
    <h1>Contacts</h1>
    <div class="ha-contact-content">
      <p>
        Pour toutes informations supplémentaires, veuillez-vous adresser à :
        <a href="mailto:colloqinnovpedag21@gmail.com" >colloqinnovpedag21@gmail.com</a>
      </p>
      <strong>Contacts :</strong>
      <div class="row">
        <div class="col-md-6">
          <div> Samira SLAOUI
            <br> &nbsp; &nbsp; &nbsp; tel : 06 63 32 13 77
            <br> &nbsp; &nbsp; &nbsp; Email : samira.slaoui@usmba.ac.ma
          </div>
        </div>
        <div class="col-md-6">
          <div> Hasna BOUTOUIL
            <br> &nbsp; &nbsp; &nbsp; tel : 06 72 73 94 63
            <br> &nbsp; &nbsp; &nbsp; Email : hasna.boutouil@usmba.ac.ma
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs"
}
</script>

<style scoped>

.ha-contact{
  padding: 20px 30px;
}
.ha-contact h1{
  font-weight: bold;
  color: #4267b2;
  margin-bottom: 30px;
}

.ha-contact-content{
  padding: 15px;
  width: 80%;
  margin: 10px auto;
}
.ha-contact-content p{
  font-size: 18px;
}
.ha-contact-content strong{
  font-size: 18px;
}
.ha-contact-content table{
  width: 60%;
  margin: 10px auto;
}
</style>