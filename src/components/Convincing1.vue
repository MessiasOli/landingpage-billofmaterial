<template>
    <div class="convincing">
      <img src="@/assets/controle.jpg" alt="Controle financeiro" />
      <div>
        <h5>Compre nosso produto ?</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis natus
          nobis vero fugit excepturi vel harum distinctio ratione error omnis
          sequi maxime alias deleniti corporis, eius ducimus ipsum odio dolorum!
        </p>
        <span @click="openFormRegister(1)">
          <Button tag="Saiba Mais" />
        </span>
      </div>
      <span class="close-form" @click="openFormRegister(0)"></span>
    </div>
</template>

<script>
import { ComponentMixin } from "./ComponentMixin";

import Button from "../template/ButtonSubmit";
export default {
  components: {
    Button,
  },
  mixins: [ComponentMixin],
};
</script>

<style scoped>
.convincing {
  background-color: #abd2fa;
  width: 100%;
  height: 400px;

  display: flex;
  align-items: space-between;
}

.convincing > img {
  height: 350px;
  width: 550px;
  margin-left: 20px;
  border-radius: 300px;
  align-self: center;
}

.convincing > div {
  padding: 20px;
  align-self: center;
}

.transient{
  transition-duration: 2s;
}

</style>
