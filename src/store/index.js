import Vue from 'vue'
import Vuex from 'vuex'
/* import axios from 'axios' */

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    User: {
      
    }
  },
  mutations: {
    setUser(state, user){
      state.User = user;
    }
  },
  actions: {
    /* async getLogin({commit}){
      try {

        const user = {
          Correo: 'prueba2@gmail.com',
          Contraseña: '123456'
        }

        const response = await axios.post('http://localhost:3000/api/auth/signin', user, {
          withCredentials: true
        })
        console.log(response)
        if (response){
          alert(response)
          const miUser = await axios.get('http://localhost:3000/api/auth/profile', {
            withCredentials: true
          });
          console.log(miUser)
          commit('setUser', JSON.stringify(miUser.data))
          return miUser
        }
      } catch (error) {
        return error
      }
      

    } */
  },
  modules: {
  }
})
