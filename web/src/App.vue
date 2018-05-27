<template>
  <div id="app">
    <div v-if="$auth.ready() && loaded">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">Navbar</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link :to="{name: 'default'}" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'about'}" class="nav-link">About</router-link>
            </li>
            <li class="nav-item" v-show="!$auth.check()">
              <router-link  :to="{name: 'register'}" class="nav-link">Sign up</router-link>
            </li>
            <li class="nav-item" v-show="!$auth.check()">
              <router-link :to="{name: 'login'}" class="nav-link">Log in</router-link>
            </li>
            <li class="nav-item" v-show="$auth.check()">
              <router-link :to="{name: 'profile'}" class="nav-link">Profile</router-link>
            </li>
            <li class="nav-item" v-show="$auth.check()">
              <a v-on:click="logout()" href="javascript:void(0);" class="nav-link">logout</a>
            </li>
          </ul>
        </div>
      </nav>

      <hr/>

      <div style="max-width:400px; margin:0 auto 50px auto;">
        <router-view></router-view>
      </div>

      <hr/>

      <div style="text-align:center; font-size:12px;">
        Websanova <a href="https://github.com/websanova/laravel-api-demo">demo server</a> available on GitHub
      </div>

    </div>

    <div v-if="!$auth.ready() || !loaded">
      <div style="text-align:center; padding-top:150px;">
        Loading site...
      </div>
    </div>

  </div>
</template>

<script>
  export default {
      name: 'app',
      data () {
          return {
              context: 'app context',
              loaded: false
          }
      },
      mounted() {
          var _this = this;
          // Set up $auth.ready with other arbitrary loaders (ex: language file).
          setTimeout(function () {
              console.log('loaded');
              _this.loaded = true;
          }, 500);
      },
      created() {
          console.log('created');
          var _this = this;
          this.$auth.ready(function () {
              console.log('ready ' + this.context);
          });
          // Vue.http.interceptors.push(function (req, next) {
          //     next(function (res) {
          //         if ( ! res.ok) {
          //             _this.$router.push({name: 'error-502'})
          //         }
          //     });
          // });
      },
      methods: {
          logout() {
              this.$auth.logout({
                  makeRequest: true,
                  success() {
                      console.log('success ' + this.context);
                  },
                  error() {
                      console.log('error ' + this.context);
                  }
              });
          },
          unimpersonate() {
              this.$auth.unimpersonate({
                  success() {
                      console.log('success ' + this.context);
                  },
                  error() {
                      console.log('error ' + this.context);
                  }
              });
          }
      }
  }
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
