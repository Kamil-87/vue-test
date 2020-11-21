<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout";
import UnauthorizedLayout from "@/layouts/UnauthorizedLayout";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout';
    }
  },
  components: {
    MainLayout,
    UnauthorizedLayout
  }
}
</script>

<style>



</style>
