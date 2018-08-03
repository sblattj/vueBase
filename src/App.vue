<template>
  <div id="app">
    <!-- <p>hello from app.vue above router-view</p> -->
    <!-- lets inject navbar here -->
    <b-navbar toggleable="sm" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#/">vueBase</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#/">Home</b-nav-item>
          <b-nav-item href="#/posts">Posts</b-nav-item>
        </b-navbar-nav>

      
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!isLoggedIn" href="#/login">Log In</b-nav-item>
          <b-nav-item v-if="!isLoggedIn" href="#/register">Register</b-nav-item>
          <b-nav-item v-else @click="logOut">Log Out</b-nav-item>
        </b-navbar-nav>
        


      </b-collapse>
    </b-navbar>
    <b-alert show v-if="alreadyLoggedOut" variant="warning">Already Logged Out</b-alert>

    
    <!-- this routerview injects other components as children -->
    <v-app id="inspire">
      <router-view/>
    </v-app>

    <footer>
      <div class="text-center">
        Stephen Blatt - ISC License
      </div>
    </footer>


  </div>
</template>

<script>
//change to passport
  export default {
    name: 'App',
    data: () => ({
      isLoggedIn: false,
      alreadyLoggedOut: false
    }),
    methods: {
      logOut () {
        if (window.localStorage.getItem('auth') != null) {
          window.localStorage.removeItem('auth');
          this.$forceUpdate();
        } else {
            this.alreadyLoggedOut = true;
        }
      },
      getLogStatus () {
        if (window.localStorage.getItem('auth') == null) {
          this.isLoggedIn = false;
        } else {
          this.isLoggedIn = true;
        }
      },
      getCurrentUser () {
        const token = window.localStorage.getItem('auth');
        return axios ({
          
        })
      }
    },
    beforeUpdate () {
      this.getLogStatus();
    }
  }

</script>

<style scoped>

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    position: relative;
    padding-bottom: 100px
  }

  footer {
    margin: auto 0;
    position: fixed;
    background: darkcyan;
    color: white;
    padding: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
  }

</style>
