<template>
  <div>
    <form
      class="auth-card"
      method="post"
      @submit.prevent="submitHandler"
    >
      <div class="form-control" :class="{invalid: errors.name}">
        <label for="name">Ваше имя:</label>
        <input
          id="name"
          type="text"
          v-model="formData.name"
        >
        <small v-if="errors.name">{{ errors.name }}</small>
      </div>

      <div class="form-control" :class="{invalid: errors.email}">
        <label for="mail">Email:</label>
        <input
          id="mail"
          type="email"
          v-model.trim="formData.email"
        >
        <small v-if="errors.name">{{ errors.email }}</small>
      </div>

      <div class="form-control">
        <label for="passwordConfirm">Пароль:</label>
        <input
          type="password"
          id="passwordConfirm"
          v-model.trim="formData.password"
        >
      </div>

      <div class="form-control">
        <label for="userAvatar">Выберите фотографию: </label>
        <input type="file" id="userAvatar">
      </div>

      <button class="auth-btn" type="submit">Войти</button>
    </form>
  </div>

</template>

<script>


export default {
  name: 'login',
  data: () => ({
    formData: {
      name: '',
      email: '',
      password: '',
      img: null,
    },
    errors: {
      name: null,
      email: null,
      password: null,
    }
  }),

  // Пароль: Не менее 8-ми символов, латиница, должны присутствовать цифры, первый символ в верхнем регистре.

  created() {
    // userService.logout()
  },

  methods: {
    formIsValid() {
      let isValid = true
      if (this.formData.name.length === 0) {
        this.errors.name = 'Поле не может быть пустым'
        isValid = false
      } else {
        this.errors.name = null
      }

      if (this.formData.email.length === 0) {
        this.errors.email = 'Поле не может быть пустым'
        isValid = false
      } else {
        this.errors.email = null
      }

      if (this.formData.password.length === 0) {
        this.errors.password = 'Поле не может быть пустым'
        isValid = false
      } else {
        this.errors.password = null
      }

      return isValid
    },
    submitHandler() {
      if(this.formIsValid()) {
        console.log('formData', this.formData)
        this.$router.push('/')
      }

    }
  }
}
</script>


<style>
.auth-card {
  width: 500px;
  background: #fff;
  padding: 25px;
  border-radius: 5px
}

.auth-btn {
  width: 30%;
  cursor: pointer;
  background: rgb(61, 157, 179);
  padding: 8px 5px;
  color: #fff;
  font-size: 24px;
  border-radius: 3px;
  border: none;
}

.auth-btn:hover {
  background: rgba(61, 157, 179, .9);
  outline: none;
}

</style>
