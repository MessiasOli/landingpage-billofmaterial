<template>
    <div class="convincing">
      <img src="@/assets/controle.jpg" alt="Controle financeiro" />
      <div>
        <h4>Se uma grande demanda chegar, seu processo esta preparado ?</h4>
        <p>
          Com o sistema <strong>Produção e Planejamento</strong> você pode adequar seu processo para atender grandes demandas e a mudanças brusca na demanda, sem se preocupar se vai faltar algo para completar o mês.
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
h4{
  font-weight: 500;
}
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
