<template>
  <div>
    <logo/>
    <h1>Home</h1>
    <div>
      value : {{ getValue }}
      <button @click="addValue">+</button> <button @click="addValueDelay">1초 뒤 +</button>
    </div>
    <div v-if="isLoading" class="list">
      <li v-for="(item, i) in employeeList" v-bind:key="item.id">
        <div>Name : {{item.employee_name}}</div>
        <div>Salary : {{item.employee_salary}}</div>
        <div>Age : {{item.employee_age}}</div>
      </li>
    </div>
  </div>
</template>

<script>
  import { mapGetters , mapMutations, mapActions } from 'vuex'
  const Logo = () => import('@/components/Logo.vue');

  export default {
    name : 'Home',
    components : {
      Logo
    },
    data() {
      return {
        isLoading : false
      }
    },
    created() {
      this.fetchData();
    },
    mounted() {
      console.log(this.CONSTANTS);
    },
    computed: {
      ...mapGetters({
        CONSTANTS: 'CONSTANTS',
        getValue: 'getValue',
        employeeList: 'getEmployeeList',
      })
    },
    methods: {
      fetchData() {
        this.getEmployeeList()
                .finally(() => {
                  this.isLoading = true;
                })
      },
      ...mapMutations({
        addValue: 'addValue'
      }),
      // Mutations 를 이용할 때
      // addValue() {
      //   this.$store.commit('addValue');
      // }
      //
      ...mapActions({
        addValueDelay: 'addValue',
        getEmployeeList: 'getEmployeeList'
      }),
      // Actions 를 이용할 때
      // addValueDelay() {
      //   this.$store.dispatch('addValue');
      // }
    }
  }
</script>

<style scoped>
  button {
    line-height: 20px;
    margin: 0 5px;
  }
  .list {
    margin-top: 50px;
  }
  .list li > div {
    display: inline-block;
    margin-right: 10px;
  }
</style>
