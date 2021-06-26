<template>
  <div id="app">
    <Header />
    <Convincing1 />
    <Convincing2 class="mt-10" />
    <Convincing3 class="mt-10" />
    <FormRegister v-if="teste" />
    <Footer />
  </div>
</template>

<script>
import Header from './template/Header'
import Convincing1 from './components/Convincing1'
import Convincing2 from './components/Convincing2'
import Convincing3 from './components/Convincing3'
import FormRegister from './components/FormRegister.vue'
import Footer from './template/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    FormRegister,
    Convincing1,
    Convincing2,
    Convincing3,
  },
  data() {
    return {
      teste: false
    }
  },
  methods: {
    openDialog: {

    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');

html, body {
  font-family: 'Montserrat', sans-serif;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.mt-10{
  margin-top: 100px;
}

body{
  background: #7692ff10;
}

body::-webkit-scrollbar{
  width: 8px;
}

*::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #2e9dd8;
  background: -moz-linear-gradient(top, #333333 0%, #3f69b1 25%, #2e9dd8 50%, #3f69b1 76%, #333333 100%);
  background: -webkit-linear-gradient(top, #333333 0%,#3f69b1 25%,#2e9dd8 50%,#3f69b1 76%,#333333 100%);
  background: linear-gradient(to bottom, #333333 0%,#3f69b1 25%,#2e9dd8 50%,#3f69b1 76%,#333333 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#333333', endColorstr='#333333',GradientType=0 );
}

*::-webkit-scrollbar-track-piece {
  background-color: #00000025;
  height: 90%;
}

*::-webkit-scrollbar-thumb {
  background: #2e9dd8;
  background: -moz-linear-gradient(left, #333333 0%, #3f69b1 25%, #2e9dd8 50%, #3f69b1 76%, #333333 100%);
  background: -webkit-linear-gradient(left, #333333 0%,#3f69b1 25%,#2e9dd8 50%,#3f69b1 76%,#333333 100%);
  background: linear-gradient(to right, #333333 0%,#3f69b1 25%,#2e9dd8 50%,#3f69b1 76%,#333333 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#333333', endColorstr='#333333',GradientType=0 );
}
</style>
