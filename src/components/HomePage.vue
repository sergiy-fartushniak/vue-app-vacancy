<template>
  <div class="home">
    <h1 v-if="userName">Name: {{userName}}</h1>
    <h1 v-if="userPassword">Password: {{userPassword}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    userName: String,
    userPassword: String,
  },
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
