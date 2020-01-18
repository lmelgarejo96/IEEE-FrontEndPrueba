<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <!-- <p>{{ user }}</p> -->
  </div>
</template>

<script>
/* import { mapState, mapActions } from 'vuex' */
export default {
  data() {
    return {
      /* user: {} */
    }
  },
  computed: {
   /*  ...mapState(['User']) */
  },
  methods: {
    /* ...mapActions(['getLogin']),
    async Login () {
      const res = await this.getLogin();
      this.user = res.data
    } */
  },
  /* mounted () {
    this.Login()
  } */
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
} */
</style>
