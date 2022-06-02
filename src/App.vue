<template>
  <v-app id="inspire">
    <v-navigation-drawer
      color="accent"
      v-model="drawer"
      :mobile-breakpoint="768"
      app
    >
      <v-img
        src="https://picsum.photos/1920/1080?random"
        height="170"
        gradient="to top right, rgba(0, 0, 0, .95), rgba(45, 40, 62, .8)"
      >
        <v-avatar size="90" class="mb-2">
          <img class="pa-4" src="ja_400x400.jpg" alt="Robert Więckowski" />
        </v-avatar>
        <div
          color="bright"
          class="ml-4 white--text text-subtitle-2 font-weight-light"
        >
          Robert Więckowski
        </div>
      </v-img>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon color="bright">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title color="bright" class="bright-color">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      class="picture-style"
      dark
      src="https://picsum.photos/1920/1080?random"
      prominent
      height="170"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0, 0, 0, .95), rgba(45, 40, 62, .8)"
        ></v-img>
      </template>
      <v-container class="header-container pa-0 pt-3 pr-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search />
        </v-row>

        <v-row>
          <v-app-bar-title  class="ml-3 first-line primary-colors font-weight-bold">
            {{ $store.state.appTitleOne }}
          </v-app-bar-title>  
          <v-app-bar-title class="ml-13 mt-n4 second-line primary-colors font-weight-bold">
            {{ $store.state.appTitleSecond }}
          </v-app-bar-title>
        </v-row>
        <v-row>
          <life-date-time />
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main class="secondary">
      <router-view></router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    data: [],
    drawer: null,
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-information-variant", to: "/about" },
    ],
  }),
  components: {
    search: require("@/components/Tools/Search.vue").default,
    "life-date-time": require("@/components/Tools/LifeDateTime.vue").default,
    snackbar: require("@/components/Shared/Snackbar.vue").default,
  },
  mounted() {
    this.$store.dispatch("getData");
  },
};
</script>

<style>
.bright-color {
  color: #d1d7ed !important;
}
.header-container {
  max-width: none !important;
}
.first-line  {
color: #802bb1 !important;
  min-width: 100vw !important;
  text-overflow: initial!important;
    white-space: initial!important;
}
.second-line  {
color: #D1D7E0 !important;
  min-width: 260px !important;
}
.v-app-bar-title__content {
  width: 250px;
}
.mdi-magnify,
.mdi-menu {
  color: #D1D7E0 !important;
}
.life-date-time {
  margin-right: -12px;
}
</style>
