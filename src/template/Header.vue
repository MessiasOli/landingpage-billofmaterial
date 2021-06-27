<template>
  <div class="header">
    <span class="logo">
      <img src="@/assets/logo2.png" alt="Logo" />
      <div class="header-title">
        <h1>
          <span class="inverted">P</span>rodução e <span>P</span>lanejamento
        </h1>
        <h2>Construa sua lista técnica dinâmicamente.</h2>
      </div>
    </span>
    <h2>Lista de Técnica dinâmica</h2>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  top: 0;

  padding: 8px;
  margin-bottom: 60px;
  box-shadow: 1px 1px 5px 1px #0005;

  color: white;
  font-weight: 600;
  background-color: cornflowerblue;
  font-family: "Montserrat", sans-serif !important;
}

.header > h2 {
  margin-top: 5px;
}

.header-title {
  display: flex;
  flex-direction: column;
  color: #fff;
}

.header-title > h1 {
  margin: 0;
  font-size: 1.3rem;
  margin-top: 0;
  padding-top: 5px;
  text-align: start;
  line-height: 1;
}

.header-title > h1 > span {
  color: black;
  margin-right: 1px;
  font-size: 1.8rem;
}

.header-title > h2 {
  text-align: left;
  margin: 0 0 0 2px;
  font-size: 0.6rem;
  line-height: 1;
}

.logo {
  display: flex;
  align-items: center;
  width: 50%;
}

.logo > img {
  width: 40px;
  height: 40px;
  border-radius: 30px;
  margin: 0 5px 0 30px;
}

.header-title {
  display: flex;
  flex-direction: column;
  color: #fff;
}
</style>
