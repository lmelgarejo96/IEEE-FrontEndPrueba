<template>
  <div class="body">
    <div class="contenedor">
      <div class="login-div">
        <div class="row">
          <div class="logo">
            <img src="../assets/img/logo.gif" alt="logo">
          </div>
        </div>
        <div class="row center-align">
          <h5>Iniciar Sesión</h5>
          <h6>Use su cuenta de miembro IEEE</h6>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email_input" v-model="user.Correo" type="email" class="validate">
            <label for="email_input">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password_input" v-model="user.Contraseña" type="password" class="validate">
            <label for="password_input">Password</label>
            <div><a href="#"><b>No recuerda su contraseña?</b></a></div>
          </div>
        </div>
        <div class="row">
          <div class="col s12">¿Aún no eres miembro IEEE? Conoce más acerca de nuestra rama estudiantil. <a href="#"><b>
                Leer Más</b></a></div>
        </div>
        <div class="row"></div>
        <div class="row">
          <div class="col s6"><a href="#">Crear cuenta</a></div>
          <div class="col s6 right-align"><a class="waves-effect waves-light btn" @click="Login()">Ingresar</a></div>
        </div>
      </div>
      <video autoplay muted loop src="../assets//video/comunity.mp4">
      </video>
    </div>
    <div id="absolute" class="absolute"></div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  data () {
    return {
      user: {
        Correo: '',
        Contraseña: ''
      }
    }
  },
  computed: {
/*     ...mapState(['User']) */
  },
  methods: {
    async Login () {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/signin', this.user, {
          withCredentials: true
        })
        console.log(response)
        if (response){
          const miUser = await axios.get('http://localhost:3000/api/auth/profile', {
            withCredentials: true
          });
          Swal.fire(
            'Good job!',
             'Authentication succesfully',
            'success'
          )
          console.log(miUser)
          this.$store.commit('setUser', miUser.data)
          if(miUser) this.$router.push('/home')
        }
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: error,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    }
  },
}
</script>
<style>
body {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  /* background: rgba(0,0,0,.95); */
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}

.contenedor {
  width: 100vw;
  min-height: 100vh;
  max-height: 1500px;
  max-width: 1920px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center; 
  position: relative;
  /* z-index: 50; */
  /* transition: ease .2s; */
}

video {
  position: absolute;
  max-width: 1920px;
  /* width: 100%;
  background-size: cover; */
  /* width: 100%; */
  top: 0;
  left: 0;
  z-index: -100;
  /* transition: all .4s; */
}

.absolute {
  width: 100%;
  max-height: 1500px;
  top: 0;
  right: 0;
  position: absolute;
  background: rgba(0,0,0,.4);
}

.login-div {
  width: 40%;
  /* max-width: 100%; */
  max-height: 1500px;
  padding: 35px;
  border-radius: 15px;
  color:white;
  background: rgba(8,8,8,0.7);
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.5);
  z-index: 100;
}

.logo {
  width:200px;
  height:150px;
  margin:0 auto;
  display: flex;
  align-items: center;
  border-radius: 50%;
  box-shadow: 3px -3px rgba(255, 255, 255, .2) inset;
  transition: all .4s;
}

.logo img {
  width: auto;
  height: auto;
}

.logo:hover {
  box-shadow: -3px 3px rgba(255, 255, 255, .2) inset;
}

.validate {
  color: rgb(255,255,254);
}

@media screen and (max-width: 1000px) {
  .login-div {
    width: 80%;
  }
  /* .absolute {
    width: 100%;
    max-height: 1500px;
    background: rgba(0,0,0,.575);
  } */
}

@media screen and (max-width: 600px) {
  video {
    display: none;
  }
  .contenedor {
    background: url('../assets/img/students.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .login-div {
    width: 100%;
    border-radius: 0;
  }
  .absolute {
    width: 100%;
    max-height: 1500px;
    background: rgba(0,0,0,.575);
  }
}

@media screen and (min-height: 1050px) {
  .contenedor {
    background: url('../assets/img/students.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .login-div {
    width: 90%;
    height: 700px;
  }
  .absolute {
    width: 100%;
    max-height: 1500px;
    background: rgba(0,0,0,.575);
  }
}

@media screen and (min-width: 1920px) {
  .contenedor {
    background: url('../assets/img/students.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .login-div {
    width: 60%;
    height: 800px;
    padding: 50px;
  }
  .absolute {
    width: 100%;
    max-height: 1500px;
    background: rgba(0,0,0,.575);
  }
}
</style>
