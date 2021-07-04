<template>
  <v-app>
    <v-app-bar
      v-if="$vuetify.breakpoint.xsOnly"
      app/>
    <v-navigation-drawer app>

    </v-navigation-drawer>
    <v-main>
      <v-container>
        컨텐츠 영역
     </v-container>
    </v-main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'GridSystem', icon: 'mdi-image', to:'/grid-system' },
      { title: 'GridListPage', icon: 'mdi-image', to:'/grid-list-page' },
    ],
    right: null,
  }),
};
</script>
