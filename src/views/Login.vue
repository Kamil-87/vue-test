<template>
  <div>
    <form
      class="auth-card"
      method="post"
      @submit.prevent="submitHandler"
    >
      <div class="form-group">
        <label for="name">Ваше имя:</label>
        <input
          id="name"
          type="text"
          v-model="name"
        >
        <small
          class="helper-text invalid"
        >
          Поле не должно быть пустым
        </small>
      </div>

      <div class="form-group">
        <label for="mail">Email:</label>
        <input
          class="invalid"
          id="mail"
          type="email"
          v-model.trim="email"
        >
        <small
          class="helper-text invalid"
        >
          Поле не должно быть пустым
        </small>
      </div>

      <div class="form-group">
        <label for="passwordConfirm">Пароль:</label>
        <input
          type="password"
          id="passwordConfirm"
          v-model.trim="password"
        >
      </div>

      <div class="form-group">
        <label for="userAvatar">Выберите фотографию: </label>
        <input type="text" id="userAvatar">
      </div>

      <button class="auth-btn" type="submit">Войти</button>
    </form>
  </div>

</template>

<script>


export default {
  name: 'login',
  data: () => ({
    name: '',
    email: '',
    password: '',
    img: ''
  }),

  // Пароль: Не менее 8-ми символов, латиница, должны присутствовать цифры, первый символ в верхнем регистре.

  created() {
    // userService.logout()
  },

  methods: {
    submitHandler() {
      console.log('submit')
      this.$router.push('/')
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

.form-group {
  margin-bottom: 20px;
}

input {
  width: 92%;
  margin-top: 4px;
  padding: 10px 15px;
  border: 1px solid rgb(178, 178, 178);
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(168, 168, 168, 0.6) inset;
  transition: all 0.2s linear;
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

.invalid {
  border: 1px solid red;
}
</style>
