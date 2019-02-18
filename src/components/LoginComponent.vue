<template>
  <div>
    <div class="md-layout md-gutter md-elevation-12 centered">
      <md-field>
        <label>Initial Value</label>
        <md-input v-model="initial"></md-input>
      </md-field>

      <md-field>
        <label>Initial Value</label>
        <md-input v-model="initial"></md-input>
      </md-field>

     <md-button class="md-raised md-primary md-alignment-top-center">Login</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  methods: {
    VerifyData() {}
  },
  data() {
    return {
      correctData: {
        login: "admin",
        password: "admin"
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
</style>
