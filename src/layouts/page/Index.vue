<template>
  <v-app>
    <page-bar />
    <page-view />
  </v-app>
</template>

<script>

import PageBar from "@/layouts/page/AppBar";
import PageView from "@/layouts/page/View";
export default {
  name: "PageLayout",
  components: {
    PageView,
    PageBar
  }
}
</script>

<style scoped>

</style>
