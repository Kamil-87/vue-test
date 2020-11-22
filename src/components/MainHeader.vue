<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">

        <div class="header__left">
          <router-link
              :to="{ name: 'profile' }"
              class="header__link">
            <img :src="require('../assets/images/user.svg')" alt="user">
          </router-link>
          <div class="header__links">
            <router-link
                class="header__link"
                :to="{ name: 'home' }" >
              Главная
            </router-link>
          </div>
        </div>

        <div class="header__right">
          <input type="text" class="header__search" placeholder="Найти статью">

          <button type="button" class="btn" v-on:click="logout">
            Выйти
          </button>

        </div>


      </div>
    </div>
  </header>
</template>

<script>

export default {
  methods: {
    logout() {
      this.$router.push('/auth')
    }
  }
}
</script>


<style lang="scss">
  .header {
    background: #FFFFFF;
    box-shadow: 0 3px 10px rgba(0, 73, 129, 0.2);

    &__inner, &__left {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__inner {
      height: 75px;
      line-height: 75px;
    }

    &__right {
      display: flex;
    }

    &__link {
      margin-right: 50px;
      padding: 16px;
      img {
        width: 30px;
        margin-right: 15px;
        display: block;
      }
    }

    &__link {
      padding: 16px;
    }

    &__search {
      padding: 8px 16px;
      border-radius: 5px;
      margin-right: 15px;
    }

  }
</style>
