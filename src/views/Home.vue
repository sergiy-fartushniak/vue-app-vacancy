<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <home-page :userName="userName" :userPassword="userPassword"></home-page>
  </div>
</template>

<script>

import HomePage from '@/components/HomePage.vue';

export default {
  name: 'Home',
  data() {
    return {
      userName: '',
      userPassword: '',
    };
  },
  components: {
    HomePage,
  },
  mounted() {
    this.userName = this.$store.state.userName;
    this.userPassword = this.$store.state.userPassword;
  },
};
</script>
