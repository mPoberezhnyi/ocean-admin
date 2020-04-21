<template>
  <div id="app">
    <b-container>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/category">Category</router-link> |
        <router-link to="/product">Product</router-link>
      </div>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import { BContainer } from 'bootstrap-vue';

export default {
  name: 'App',
  components: {
    BContainer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  text-align: center;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
