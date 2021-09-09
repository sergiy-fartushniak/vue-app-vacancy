<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/vacancies">Vacancies</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background-color: #e9e6f2;
  padding: 20px;
  color: #4d457b;
  font-family: "Roboto", sans-serif;
}

h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 15px;
}

h3 {
  text-align: center;
}

label,
p {
  margin: 0;
}

ul {
  padding: 0;
}

%stretch-panel {
  flex-grow: 1;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
}

</style>
