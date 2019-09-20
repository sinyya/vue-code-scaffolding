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
    }
  }
</script>

<style>

</style>
