<template>
  <div>
     <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Hello Marek!</div>
          <div class="md-subhead">Welcome to webdziekanat!</div>
          <br><br>
          <div class="md-body-2">Faculty:</div>
          <div class="md-body-1">Faculty of Electrical, Electronic, Computer and Control Engineering</div>
          <br>
          <div class="md-body-2">Your course:</div>
          <div class="md-body-1">Computer science</div>
          <br>
          <div class="md-body-2">Semester:</div>
          <div class="md-body-1">5</div>
          <br>
          <div class="md-body-2">Your index number:</div>
          <div class="md-body-1">210902</div>
        </md-card-header-text>

        <md-card-media md-big>
          <img src="../assets/user_icon.png" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button class="md-raised" v-on:click="settingsorbug = true">Settings</md-button>
        &emsp;
        <md-button class="md-raised md-accent" v-on:click="settingsorbug = true">Report bug</md-button>
      </md-card-actions>
    </md-card>

  <md-dialog-alert
    :md-active.sync="settingsorbug"
    md-title="Currently unavailable"
    md-content="This is only a <strong>first</strong> iteration of this app. More functionalities are coming soon" />
  </div>
</template>

<script>
export default {
  name: "HomepageComponent",
  data() {
    return {
      settingsorbug: false
    }
  }
}
</script>

<style scoped>
.md-card {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 50px;
    width: 30%;
    text-align: center;
  }
</style>
