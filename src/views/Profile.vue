<template>
  <main class="main">
    <div class="container">
      <div class="main__top">
<!--        <button-->
<!--            class="btn"-->
<!--            @click="addPost"-->
<!--        >-->
<!--          Добавить статью-->
<!--        </button>-->

        <button
            class="btn"
            @click="EditProfile"
        >
          Редактировать профиль
        </button>
      </div>

      <popup
        v-if="showPopup"
        @close="closePopup"
        popupTitle="Редактировать профиль"
      >
        <h3 slot="header">Редактировать профиль</h3>
        <template v-slot:body>
          <edit-profile />
        </template>
      </popup>

      <div class="profile">
        <div class="profile__left">
          <img :src="require('../assets/images/user.svg')" alt="">
        </div>

        <div class="profile__right">
          <h2 class="profile__name">{{ userName }}</h2>
          <div class="profile__info">
            <p class="profile__info-title">О себе</p>
            <p class="profile__info-description">{{ userAbout }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Popup from "../views/Popup"
import EditProfile from "../components/EditProfile"

export default {
  data() {
    return {
      showPopup: false
    }
  },
  computed:{
    userName() {
      return this.$store.getters.getUserName
    },
    userAbout(){
      return this.$store.getters.getUserAbout
    }
  },
  components: {
    Popup,
    EditProfile,
  },
  beforeCreate() {
    // userService.refreshState()
  },
  methods: {
    EditProfile() {
      this.showPopup = true
    },
    closePopup() {
      this.showPopup = false
    }
  }
}
</script>

<style lang="scss">
  .profile {
    display: flex;
    justify-content: space-between;

    &__left {
      width: 25%;
      border-radius: 5px;
      background: #FFFFFF;
      text-align: center;
      height: 150px;
      padding: 25px;

      img {
        width: 90px;
      }
    }

    &__right {
      width: 73%;
      border-radius: 5px;
      background: #FFFFFF;
      text-align: left;
      min-height: 200px;
      padding: 25px;
    }

    &__name {
      margin-bottom: 20px;
      border-bottom: 1px solid #969696;
      padding-bottom: 15px;
    }

    &__info {

      &-title {
        font-weight: 700;
        margin-bottom: 10px;
        font-size: 20px;
      }

      &-description {
        line-height: 25px;
      }
    }
  }
</style>
