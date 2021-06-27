<template>
  <div class="convincing">
    <img src="@/assets/fluxograma.jpg" alt="Controle financeiro" />
    <div>
      <h5>Seus preços são justos ?</h5>
      <p>
        Faça um planejamento agora mesmo e descubra quanto deveria gastar por processos...
      </p>
      <span @click="openFormRegister(3)">
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
  background-color: #7692ff;
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
</style>
