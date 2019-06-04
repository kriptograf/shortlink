<template>
  <v-app>

    <v-navigation-drawer app temporary v-model="drawer">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Short Links
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile
                v-for="item in items"
                :key="item.title"
                :to="item.url"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dark color="primary">

      <v-toolbar-side-icon
              @click="drawer = !drawer"
              class="hidden-md-and-up"
      ></v-toolbar-side-icon>

      <v-toolbar-title>Short Links</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
                flat
                v-for="item in items"
                :key="item.title"
                :to="item.url"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app></v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Home', icon: 'dashboard', url: '/' },
        { title: 'About', icon: 'question_answer', url: '/about' },
        { title: 'Login', icon: 'dashboard', url: '/login' },
        { title: 'Registration', icon: 'dashboard', url: '/signup' },
        { title: 'Profile', icon: 'dashboard', url: '/profile' }
      ],
      right: null
    }
  }
}
</script>
