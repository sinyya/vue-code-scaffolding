<template>
  <div>
    <img :src="logoUrl" alt="Logo">
    <img :src="require(`@/assets/images/${logoFileName}`)" alt="Logo">
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

</style>
