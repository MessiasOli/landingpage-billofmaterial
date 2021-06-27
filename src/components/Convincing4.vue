<template>
  <div class="convincing">
    <div>
      <h5>Lista técnica dinâmica.</h5>
      <p>
        Traga seus processos para o mundo digital para Industrias 4.0. Crie e edite seus processos de acordo com suas necessidades, nosso sistema é capaz de lhe fornecer meios de realizar calculos de demanda e custo pelo o que é mais importante para você no momento, dê importânia ao que mais lhe rende no momenoto, não perca tempo clique aqui e conheça os detalhes.
      </p>
      <span @click="openFormRegister(4)">
        <Button tag="Clique aqui" />
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
  display: flex;
  background-color: #7692ff50;
  width: 100%;
  height: 400px;

}

.convincing > div {
  width: 100%;
  padding: 20px;
  align-self: center;
}
</style>
