<template>
  <div>
<!--    <logo/>-->
    <h1>Home</h1>
      <router-link :to="{path:'/main/foo'}" relace>/main/foo</router-link>
      <router-view></router-view>
<!--    <div>-->
<!--      value : {{ getValue }}-->
<!--      <button @click="addValue">+</button> <button @click="addValueDelay">1초 뒤 +</button>-->
<!--    </div>-->
<!--    <div v-if="isLoading" class="list">-->
<!--      <li v-for="item in employeeList" v-bind:key="item.id">-->
<!--          {{item.employee_name}} <button class="btn" @click="setInfo($event, item.id)">Show Details</button>-->
<!--          <div v-if="employeeInfo.id === item.id" class="detail">-->
<!--              <div>Salary : {{employeeInfo.employee_salary}}</div>-->
<!--              <div>Age : {{employeeInfo.employee_age}}</div>-->
<!--          </div>-->
<!--      </li>-->
<!--    </div>-->
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
        employeeInfo: 'getEmployeeInfo',
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
        getEmployeeList: 'getEmployeeList',
        getEmployeeInfo: 'getEmployeeInfo'
      }),
      // Actions 를 이용할 때
      // addValueDelay() {
      //   this.$store.dispatch('addValue');
      // }
        setInfo($event, id) {
            this.getEmployeeInfo({id})
                .finally(() => {
                    console.log(`setInfo complete!! id : ${id}`);
                })
        }
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
  .list li{
      margin-bottom: 20px;
  }
  .list li .btn{
      margin-left: 150px;
  }
  .list li .common > div {
    display: inline-block;
    margin-right: 10px;
  }
</style>
