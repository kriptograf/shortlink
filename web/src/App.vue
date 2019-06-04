<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">Navbar</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/signup" class="nav-link" v-if="!auth.user.authenticated">Sign up</router-link>
            </li>
            <li class="nav-item" v-show="true">
              <router-link to="/login" class="nav-link" v-if="!auth.user.authenticated">Log in</router-link>
            </li>
            <li class="nav-item" v-show="true">
              <router-link to="/profile" class="nav-link" v-if="auth.user.authenticated">Profile</router-link>
            </li>
            <li class="nav-item" v-show="true">
              <a v-on:click="signout" href="javascript:void(0);" class="nav-link" v-if="auth.user.authenticated">Logout</a>
            </li>
          </ul>
        </div>
      </nav>

      <main role="main">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </main>

    <footer class="footer">
      <div class="container">
        <p class="float-left">&copy; My Company 2018</p>
        <p class="float-right">Powered Vue2 + Yii2</p>
      </div>
    </footer>
  </div>

</template>

<script>
  import auth from './auth.js';
  export default {
      //name: 'app',
      data () {
          return {
              pageTitle: 'Home',
              auth: auth
          }
      },
      methods: {
          signout() {
              auth.signout()
          }
      },
      mounted: function() {
          auth.check();
      }
  }
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
