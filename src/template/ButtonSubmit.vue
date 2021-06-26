<template>
    <button class="btn">
      {{ tag }}
    </button>
</template>

<script>
  export default {
    props: ['tag'],
    
  }
</script>

<style scoped>
.btn {
  width: 125px;
  border: 1px solid #3f2b96;
  border-radius: 8px;

  color: white;
  font-weight: 550;
  background-color: #3f2b96;

  transition-duration: 800ms;
}

.btn:hover {
  font-weight: 650;
  box-shadow: 2px 2px 2px #a8c0ff;
  color: white;
  transition-duration: 150ms;
}

.btn:active {
  background-color: #a8c0ff;
}


</style>