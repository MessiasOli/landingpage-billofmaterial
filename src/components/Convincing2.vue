<template>
  <div class="convincing">
    <div>
      <h5>Você considera as perdas em seus calculos ?</h5>
      <p>
        Através de nosso sofware as perdas podem ser consideradas desde o iníncio e no final do mês não terá surpresas a não ser as planejadas!
      </p>
      <span @click="openFormRegister(2)">
        <Button tag="Saiba Mais" />
      </span>
    </div>
    <img src="@/assets/gastaronde.png" alt="Controle financeiro" />
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
  background-color: #3d518c;
  width: 100%;
  height: 400px;

  color: white;
  display: flex;
  align-items: space-between;
}

.convincing > img {
  height: 350px;
  width: 550px;
  margin-right: 20px;
  border-radius: 300px;
  align-self: center;
}

.convincing > div {
  padding: 20px;
  align-self: center;
}
</style>
