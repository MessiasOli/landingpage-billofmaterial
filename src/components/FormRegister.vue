<template>
  <div class="form-register">
    <h3> Criar uma conta </h3>
    <h6> Você já possui uma conta ? <a @click="enter">Entrar</a></h6>
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

      <b-form-group class="mt-2" id="input-group-2" label="Seu nome:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Nome de usuário"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="mt-2" id="input-group-2" label="Senha:" label-for="input-2">
        <b-form-input
          type="password"
          id="input-3"
          v-model="form.password"
          placeholder="Senha"
          required
        ></b-form-input>
      </b-form-group>

      <Button class="mt-2" tag="Registrar" @click="onSubmit = $event" ></Button>
      
    </b-form>
  </div>
</template>

<script>
  import Button from '../template/ButtonSubmit'

  export default {
    name: "FormRegister",
    components:{
      Button
    },
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: ''
        },
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },

      enter(){
        alert("Entrei");
      }
    }
  }
</script>

<style scoped>
.form-register{
  border-radius: 8px;
  padding: 16px;
  background-color: #3f2b9605;
  box-shadow: 2px 3px 5px #3f2b96;
  max-width: 350px;
}

.form-register>h6>a{
  cursor: pointer;
  color: #a8c0ff;
  font-weight: 500;
}
</style>>
