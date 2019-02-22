<template>
  <div>
    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Home" md-icon="home" v-on:click="ChangeTab('home')">
      </md-tab>

      <md-tab id="tab-grades" md-label="Grades" md-icon="poll" :md-disabled="!this.isLogged" v-on:click="ChangeTab('grades')">
      </md-tab>

      <md-tab id="tab-mail" href="https://poczta.edu.p.lodz.pl" md-label="Mail" md-icon="email" :md-disabled="!this.isLogged">
      </md-tab>

      <md-tab id="tab-uni" href="https://p.lodz.pl" md-label="University" md-icon="school" :md-disabled="!this.isLogged">
      </md-tab>

      <md-tab id="tab-logout" md-label="Log Out" md-icon="exit_to_app" :md-disabled="!this.isLogged" v-on:click="logout = true">
      </md-tab>
    </md-tabs>
    
    <div v-if="this.currentTab==='home'">
      <div v-if="!this.isLogged">
        <LoginComponent></LoginComponent>
      </div>
      <div v-else>
        <HomepageComponent></HomepageComponent>
      </div>
    </div>
    <div v-else-if="this.currentTab==='grades'">
      <GradesComponent></GradesComponent>
    </div>

  <md-dialog-confirm
    :md-active.sync="logout"
    md-title="Are you sure you want to log out of Webdziekanat?"
    md-content="After logging out you cannot access your info and grades until you log in again"
    md-confirm-text="Yes"
    md-cancel-text="No"
    @md-confirm="LogOut" />

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import LoginComponent from './components/LoginComponent.vue'
import HomepageComponent from './components/HomepageComponent.vue'
import GradesComponent from './components/GradesComponent.vue'
export default {
  name: "app",
  components: {
    LoginComponent,
    GradesComponent,
    HomepageComponent
  },
  computed: {
    ...mapState({
      isLogged: 'isLogged'
    })
  },
  data() {
    return {
      logout: false,
      currentTab: 'home'
    }
  },
  methods: {
    ...mapMutations([
      'LOG_OUT'
    ]),
    LogOut() {
      this.LOG_OUT()
      this.currentTab = 'home'
    },
    ChangeTab(tab) {
      this.currentTab = tab
    }
  }
};
</script>

<style scoped>
</style>
