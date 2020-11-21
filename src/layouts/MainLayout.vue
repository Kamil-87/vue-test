<template>
  <div class="main-layout">

    <Navbar />

    <div class="app-page">
        <router-view />
    </div>

  </div>
</template>

<script>
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "main-layout",
  components: {
    Header,
    Navbar,
    Footer
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
