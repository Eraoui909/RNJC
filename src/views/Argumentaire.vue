<template>
  <div class="ha-argumentaire">
    <h2>Argumentaire</h2>
    <div class="ha-content">
      <p>Coming soon..</p>
      <div>
        <Strong>Title</Strong>
        <div class="list-type2">
          <ol>
            <li><a href="#">List</a></li>
            <li><a href="#">List</a></li>
            <li><a href="#">List</a></li>
          </ol>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Argumentaire"
}
</script>

<style scoped>

  .ha-argumentaire{
    padding: 20px 30px;
  }
  .ha-argumentaire h2{
    font-weight: bold;
    color: #4267b2;
  }
  .ha-argumentaire .ha-content{
    padding: 20px 50px;
    font-size: 19px;
  }

  @media only screen and (max-width: 750px) {
    .ha-argumentaire .ha-content{
      padding: 20px 1px;
    }
  }
  .ha-argumentaire .ha-content p{
    text-indent: 50px;
    text-align: justify;
    letter-spacing: 1.5px;
  }
  .ha-argumentaire .ha-content strong{
    color: #4267b2;
  }
  .list-type2{
    width:90%;
    margin:0 auto;
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

  .ha-conclusion{
    margin: 20px auto;
    padding: 15px;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 8px 2px gray;
    font-size: 20px;
  }
</style>