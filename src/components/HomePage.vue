<template>
  <div class="home">
    <h1>Name: {{this.$store.state.userName}}</h1>
    <h1>Password: {{this.$store.state.userPassword}}</h1>
    <h1>Token: {{this.$store.state.isAuth}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
