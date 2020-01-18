<template>
  <div class="home">
    <h1>Authentication succesfully</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <p>
      <b>
        {{ User }}
      </b>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    /* HelloWorld */
  },
  /* data () {
    return {
      user: {}
    }
  }, */
  computed: {
    ...mapState(['User'])
  }
}
</script>

<style >
.home{
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
}
p {
  text-align: center;
  width: 50%;
}
</style>
