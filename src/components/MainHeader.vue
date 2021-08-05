<template>
  <header class="header" :class="isMobile ? '_touch' : '_pc'">
    <div class="container">

      <div class="header__menu menu">
        <div
          class="menu__icon"
          :class="{'_active': openMenu}"
          @click="openMenu=!openMenu"
        >
          <span></span>
        </div>

        <NavigationMobile
          v-if="isMobile"
          @logout="logout"
          :menu="menu"
          :is-active="openMenu"
        />

      </div>

      <Navigation
        v-if="!isMobile"
        @logout="logout"
        :menu="menu"
      />
    </div>
  </header>
</template>

<script>

import Navigation from "./Navigation"
import NavigationMobile from "./NavigationMobile"

export default {
  components: {NavigationMobile, Navigation},
  data: () => ({
    isMobile: false,
    openMenu: false,
    menu: [
      {to: '/', title: 'Главная'},
      {to: '/profile', title: 'Профиль'},
      {to: '/about', title: 'О приложении'},
    ]
  }),
  created() {
    this.handleView()
    window.addEventListener('resize', this.handleView)
  },
  methods: {
    handleView() {
      this.isMobile = window.innerWidth <= 768
    },
    logout() {
      this.$router.push('/auth')
    },
  }
}
</script>


<style lang="scss">

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #30323a;
  padding: 15px 0;

  &__search {
    padding: 8px 16px;
    border-radius: 5px;
    margin-right: 15px;
  }

}
</style>
