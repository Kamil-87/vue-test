<template>
  <div class="main-layout">

    <div class="app-page">
        <router-view />
    </div>

  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import userService from "../service/userService";
export default {
  name: "main-layout",
  components: {
    Header,
    Footer
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
.app-page {
  background: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
