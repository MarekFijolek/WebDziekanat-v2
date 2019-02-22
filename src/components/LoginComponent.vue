<template>
  <div>
    <div v-if="!this.isLogged" class="md-layout md-gutter md-alignment-top-center md-elevation-12 centered">
      <md-caption>
        <h2>Log in</h2>
        <h3>Open Webdziekanat</h3>
      </md-caption>
      <md-field>
        <label>Login</label>
        <md-input v-model="form.login"></md-input>
      </md-field>

      <md-field>
        <label>Password</label>
        <md-input type="password" v-model="form.password"></md-input>
      </md-field>

      <md-button class="md-raised md-primary md-alignment-top-center" v-on:click="VerifyData()">Login</md-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: "LoginComponent",
  computed: {
    ...mapState({
      isLogged: 'isLogged'
    })
  },
  methods: {
    ...mapMutations([
      'LOG_IN'
    ]),
    VerifyData: function() {
      if (this.form.login === this.correctData.login && this.form.password === this.correctData.password) {
        this.LOG_IN()
      }
    }
  },
  data() {
    return {
      correctData: {
        login: "admin",
        password: "admin"
      },
      form: {
        login: null,
        password: null
      }
    }
  }
}
</script>
  
<style scoped>
  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 50px;
    width: 30%;
    text-align: center;
  }

  h2 {
    font-family: 'Quicksand', sans-serif;
    font-size: 27px;
    text-align: center;
  }

  h3 {
    font-family: 'Quicksand', sans-serif;
  }
</style>
