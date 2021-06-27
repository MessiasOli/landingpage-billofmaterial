<template>
  <div id="app">
    <Header />
    <Convincing1 @callForm="openForm = $event" class="convincing-1" />
    <Convincing2 @callForm="openForm = $event" class="convincing-2 mt-10" />
    <Convincing3 @callForm="openForm = $event" class="convincing-3 mt-10" />
    <FormRegister @callForm="openForm = $event" id="form-transient"/>
    <Footer />
  </div>
</template>

<script>
import Header from "./template/Header";
import Convincing1 from "./components/Convincing1";
import Convincing2 from "./components/Convincing2";
import Convincing3 from "./components/Convincing3";
import FormRegister from "./components/FormRegister.vue";
import Footer from "./template/Footer";

export default {
  name: "App",
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
      openForm: -1,
      windownWidth: 0,
      formOpen: false
    };
  },
  watch: {
    openForm(open) {
      if (open > 0)
        this.showForm(open)
      else
        this.closeForm();
    },
  },
  methods:{
    showForm(param){
      document.querySelector(`.convincing-${param}`).style["margin-left"] = `-${this.windownWidth}px`
      document.querySelector(`.close-form`).style.cursor = "pointer"
      setTimeout(()=>{
        document.querySelector(`#form-transient`).style.display = "block"
      }, 1000)
      this.formOpen = true;
    },
    closeForm(){
      document.querySelector(`.convincing-1`).style["margin-left"] = "0"
      document.querySelector(`.convincing-2`).style["margin-left"] = "0"
      document.querySelector(`.convincing-3`).style["margin-left"] = "0"
      document.querySelector(`.close-form`).style.cursor = "default"
      setTimeout(()=>{
        document.querySelector(`#form-transient`).style.display = "none"
      }, 400)
      this.formOpen = false;
      this.openForm = -1;
    }
  },
  mounted() {
    let that = this
    this.windownWidth = document.querySelector("#app").offsetHeight - 100;
    document.querySelector("body").onscroll = function(){
      console.log("fechar", that.formOpen)
      if(that.formOpen){
        that.closeForm()
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap");

html,
body {
  font-family: "Montserrat", sans-serif;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(to right, #b3dbff90, #fffde4, #b3dbff90);
}

.convincing-1,
.convincing-2,
.convincing-3{
  border-radius: 8px;
  transition-duration: 2.5s;
}

#form-transient{
  display: none;
  transition-delay: 1.5s;
  transition-duration: 1s;
}

.close-form{
  height: 100%;
  padding: 0 10px 0 10px;
}

.mt-10 {
  margin-top: 100px;
}

body {
  background: #7692ff10;
}

body::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #2e9dd8;
  background: -moz-linear-gradient(
    top,
    #333333 0%,
    #3f69b1 25%,
    #2e9dd8 50%,
    #3f69b1 76%,
    #333333 100%
  );
  background: -webkit-linear-gradient(
    top,
    #333333 0%,
    #3f69b1 25%,
    #2e9dd8 50%,
    #3f69b1 76%,
    #333333 100%
  );
  background: linear-gradient(
    to bottom,
    #333333 0%,
    #3f69b1 25%,
    #2e9dd8 50%,
    #3f69b1 76%,
    #333333 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#333333', endColorstr='#333333',GradientType=0 );
}

*::-webkit-scrollbar-track-piece {
  background-color: #00000025;
  height: 90%;
}

*::-webkit-scrollbar-thumb {
  background: #2e9dd8;
  background: -moz-linear-gradient(
    left,
    #333333 0%,
    #3f69b1 25%,
    #2e9dd8 50%,
    #3f69b1 76%,
    #333333 100%
  );
  background: -webkit-linear-gradient(
    left,
    #333333 0%,
    #3f69b1 25%,
    #2e9dd8 50%,
    #3f69b1 76%,
    #333333 100%
  );
  background: linear-gradient(
    to right,
    #333333 0%,
    #3f69b1 25%,
    #2e9dd8 50%,
    #3f69b1 76%,
    #333333 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#333333', endColorstr='#333333',GradientType=0 );
}
</style>
