<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__left">
          <a href="#" class="header__link">
            <img :src="require('../assets/images/user.svg')" alt="">
          </a>
        </div>
        <div class="header__right">
          <Navbar />
          <input type="text" class="header__search" placeholder="Найти статью">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "header",
  components: {
    Navbar
  }
}
</script>


<style lang="scss">
  .header {
    height: 75px;
    background: #FFFFFF;
    box-shadow: 0 3px 10px rgba(0, 73, 129, 0.2);
  }
</style>
