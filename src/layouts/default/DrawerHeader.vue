<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-img :src="require('@/assets/logo.png')" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title class="text-h6">
        SongCoding
      </v-list-item-title>
      <v-list-item-subtitle>
        Vuetify
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "DefaultDrawerHeader"
}
</script>

<style scoped>

</style>
