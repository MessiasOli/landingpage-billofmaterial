<template>
  <div class="convincing">
    <img src="@/assets/fluxograma.jpg" alt="Controle financeiro">
    <div>
      <h5>Compre nosso produto ?</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis natus nobis vero fugit excepturi vel harum distinctio ratione error omnis sequi maxime alias deleniti corporis, eius ducimus ipsum odio dolorum!</p>
      <Button tag="Saiba Mais" />
    </div>
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
  background-color: #7692ff;
  width: 100%;
  height: 400px;

  display: flex;
  align-items: space-between;
}

.convincing>img{
  height: 350px;
  width: 550px;
  margin-left: 20px;
  border-radius: 300px;
  align-self: center;
}

.convincing>div{
  padding: 20px;
  align-self: center;
}

</style>