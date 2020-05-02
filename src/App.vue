<template>
  <v-app>
    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list>
        <v-list-item
          v-for="link of links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-item-icon>
            <v-icon color="primary">{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div>
      <v-app-bar dense dark color="primary">
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" class="pointer">Intranet</router-link></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            dark
            depressed
            color="primary"
            v-for="link of links"
            :key="link.title"
            :to="link.url"
          >
            <v-icon left>{{ link.icon }}</v-icon>
            {{ link.title }}
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
    </div>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: 'Вход', icon: 'lock', url: '/signin' },
        { title: 'Регистрация', icon: 'face', url: '/signup' },
        { title: 'Orders', icon: 'bookmark_border', url: '/orders' },
      ],
    };
  },
};
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
