<template>
  <div id="app">
    <Header></Header>
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

  export default {
    name: 'App',
    components: {
      Header,
      Navbar,
      Footer
    }
  }
</script>

<style lang="scss">

  body{
    background-color: #EEE;
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto', sans-serif;
  }
  #app{
    width: 95%;
    margin: 0px auto;
    padding: 0px;
    background-color: white;
    box-shadow: 0px 0px 5px 0px gray;
  }

  @media only screen and (max-width: 770px) {
    #app {
      width: 100%;
    }
  }

</style>
