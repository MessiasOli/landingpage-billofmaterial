<template>
  <div class="form-register">
    <h3 class="mt-1">Criar uma conta</h3>
    <span class="close" @click="closeRegister()">x</span>
    <h6>Você já possui uma conta ?</h6>
    <b-form @submit="onSubmit">
      <b-form-group
        class="mt-2"
        id="input-group-1"
        label="E-mail"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Digite seu e-mail aqui"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="mt-2"
        id="input-group-2"
        label="Seu nome:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Nome completo"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="mt-2"
        id="input-group-2"
        label="Senha:"
        label-for="input-2"
      >
        <b-form-input
          type="password"
          id="input-3"
          v-model="form.password"
          placeholder="Senha"
          required
        ></b-form-input>
      </b-form-group>

      <Button class="mt-2" tag="Registrar" @click="onSubmit = $event"></Button>
    </b-form>
  </div>
</template>

<script>
import { ComponentMixin } from "./ComponentMixin";
import Button from "../template/ButtonSubmit";

export default {
  name: "FormRegister",
  components: {
    Button,
  },
  mixins: [ComponentMixin],
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    closeRegister() {
      this.$emit("callForm", 0);
    },
  },
};
</script>

<style scoped>
.form-register {
  position: fixed;
  top: 23%;
  left: 40%;
  border-radius: 8px;
  padding: 16px;
  background-color: #3f2b9605;
  box-shadow: 2px 3px 5px #3f2b96;
  max-width: 350px;
  min-width: 300px;
}

.form-register > h6 > a {
  cursor: pointer;
  color: #a8c0ff;
  font-weight: 500;
}

.close {
  position: absolute;
  top: 5px;
  right: 10px;

  cursor: pointer;
}

.close:hover {
  font-weight: 700;
}
</style>
