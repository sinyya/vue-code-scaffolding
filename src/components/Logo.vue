<template>
  <div>
    <img :src="logoUrl" alt="Logo">
    <img :src="require(`@/assets/images/${logoFileName}`)" alt="Logo">
    <div class="logo"></div>
  </div>
</template>

<script>
  export default {
    name : 'Logo',
    data() {
      return {
        logoUrl : require('@/assets/images/logo.png'),
        logoFileName : 'logo.png'
      }
    }
  }
</script>

<style>
.logo {
  width: 200px;
  height: 200px;
  background: url('~@/assets/images/logo.png');
}
</style>
