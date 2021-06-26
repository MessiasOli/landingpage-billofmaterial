<template>
  <div class="convincing">
    <div>
      <h5>Compre nosso produto ?</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis natus nobis vero fugit excepturi vel harum distinctio ratione error omnis sequi maxime alias deleniti corporis, eius ducimus ipsum odio dolorum!</p>
      <Button tag="Saiba Mais" />
    </div>
    <img src="@/assets/gastaronde.png" alt="Controle financeiro">
  </div>
</template>

<script>
  import Button from "../template/ButtonSubmit"
  export default {
    components:{
      Button
    }
    
  }
</script>

<style scoped>
.convincing{
  background-color: #3d518c;
  width: 100%;
  height: 400px;

  color: white;
  display: flex;
  align-items: space-between;
}

.convincing>img{
  height: 350px;
  width: 550px;
  margin-right: 20px;
  border-radius: 300px;
  align-self: center;
}

.convincing>div{
  padding: 20px;
  align-self: center;

}

</style>