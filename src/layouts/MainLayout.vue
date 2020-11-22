<template>
  <div class="main-content">
    <main-header />
    <router-view />
    <main-footer />
  </div>
</template>

<script>
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import userService from "../service/userService";
export default {
  name: "main-layout",
  components: {
    MainHeader,
    MainFooter
  },
  created() {
    this.checkUserAuthentication()
  },
  methods: {
    checkUserAuthentication() {
      if (!userService.currentUser()) {
        this.$router.push('/auth')
      }
    }
  }
};
</script>

<style lang="scss">
  .main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

</style>
