<template>
  <div id="app">
    <!-- <p>hello from app.vue above router-view</p> -->
    <!-- lets inject navbar here -->
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#/">vueBase</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="/#/posts">Posts</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <!-- this routerview injects other components as children -->
    <router-view/>

    <footer>
      <div class="col-md-4 text-center">
        Stephen Blatt - ISC License
      </div>
    </footer>


  </div>
</template>

<script>
  export default {
    name: 'App'
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
    padding: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100px;
  }

</style>
