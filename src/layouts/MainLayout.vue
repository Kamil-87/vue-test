<template>
  <div class="app-main-layout">

    <Navbar />

    <div class="app-page container">
        <router-view />
    </div>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "main-layout",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
.app-page {

  background: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
