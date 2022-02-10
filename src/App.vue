<template>
  <div id="app">
    <Header></Header>
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';

  export default {
    name: 'App',
    components: {
      Navbar,
      Footer,
      Header
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
    width: 90%;
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


  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #4267b2 ;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }



</style>
