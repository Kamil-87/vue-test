<template>
  <div class="_pc">
    <div class="header__inner">

      <div class="menu__icon">
        <span></span>
      </div>

      <div class="header__left">
        <router-link
          to="/profile"
          class="header__link">
          <img :src="require('../assets/images/user.svg')" alt="user">
        </router-link>

        <nav class="header__links">
          <ul class="menu__list">
            <router-link
              v-for="item of menu"
              :key="item.name"
              :to="item.to"
              tag="li"
              class="header__link"
            >
              <a class="menu__link">{{ item.title }}</a>
            </router-link>
          </ul>
        </nav>
      </div>

      <div class="header__right">
        <input type="text" class="header__search" placeholder="Найти статью">

        <button type="button" class="btn" @click.prevent="logout">
          Выйти
        </button>

      </div>

    </div>
  </div>
</template>

<script>

export default {
  props: {
    menu: {
      type: Array,
      default: () => [{to: '/',title: 'Главная'}]

    }
  },
  methods: {
    logout() {
      this.$emit('logout')
    }
  }
}
</script>


<style>

</style>
