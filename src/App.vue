<template>
  <v-fab-transition mode="out-in">
    <router-view></router-view>
  </v-fab-transition>

</template>

<script>
import '@/styles/overrides.sass'
export default {
  name: 'App',

};
</script>
