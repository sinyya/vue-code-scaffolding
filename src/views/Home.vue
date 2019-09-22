<template>
  <div>
    <Logo/>
    Home
  </div>
</template>

<script>
  const Logo = () => import('@/components/Logo.vue');

  export default {
    name : 'Home',
    components : {
      Logo
    },
    mounted() {
      console.log(this.$store.state.CONSTANTS)
    }
  }
</script>

<style>

</style>
