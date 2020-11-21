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
      const user = localStorage.getItem("currentUser")
      if (!user) {
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
