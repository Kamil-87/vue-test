<template>
  <form class="form-box" @submit.prevent="saveInfoUser">
    <div class="form-group">
      <label for="name">
        <input
          id="name"
          type="text"
          placeholder="Ваше имя"
          v-model="userName"
        >
      </label>
    </div>

    <div class="form-group">
      <label for="profileInfo">
        <textarea
          id="profileInfo"
          placeholder="О себе"
          class="edit-text"
          v-model="userAbout"
        />
      </label>
    </div>

    <button class="btn" type="submit">
      Сохранить
    </button>

  </form>
</template>

<script>

export default {
  data: () => ({
    userName: '',
    userAbout: ''
  }),

  methods: {
    saveInfoUser() {
      this.$store.dispatch('setUserName', this.userName)
      this.$store.dispatch('setUserAbout', this.userAbout)

      const formData = {
        userName: this.userName,
        userAbout: this.userAbout,
      }
      console.log(formData)
    },
  }
}
</script>


<style lang="scss">
.form-box {
  padding: 0 20px;
}

.form-group {
  margin-bottom: 20px;

  & .edit-text {
    height: 120px;
  }
}





</style>
