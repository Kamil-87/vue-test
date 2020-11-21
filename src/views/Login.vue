<template>
  <div>
    <form
        class="auth-card"
        @submit.prevent="authorize"
        action="/"
        method="post"
    >
      <div class="form-group">
        <label for="name">Ваше имя:</label>
        <input
            id="name"
            type="text"
            v-model="name"
            :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength) || ($v.name.$dirty && !$v.name.maxLength)}"
        >
        <small
            class="helper-text invalid"
            v-if="$v.name.$dirty && !$v.name.required"
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
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <small
            class="helper-text invalid"
            v-if="$v.email.$dirty && !$v.email.required"
        >
          Поле не должно быть пустым
        </small>
        <small
            class="helper-text invalid"
            v-else-if="$v.email.$dirty && !$v.email.email"
        >
          Введите корректный Email
        </small>
      </div>

      <div class="form-group">
        <label for="passwordConfirm">Пароль:</label>
        <input
            type="password"
            id="passwordConfirm"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <small
            class="helper-text invalid"
            v-if="$v.password.$dirty && !$v.password.required"
        >
          Введите пароль
        </small>
        <small
            class="helper-text invalid"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
        >
          Пароль не может быть меньше {{$v.password.$params.minLength.min}}
        </small>
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
import {email, required, minLength, maxLength} from 'vuelidate/lib/validators'
import userService from "../service/userService";

export default ({
  name: 'login',
  data: () => ({
    name: '',
    email: '',
    password: '',
    img: ''
  }),

 // Пароль: Не менее 8-ми символов, латиница, должны присутствовать цифры, первый символ в верхнем регистре.

  validations: {
    name: {required, minLength: minLength(3), maxLength: maxLength(15)},
    email: {email, required},
    password: {required, minLength: minLength(8)}
  },

  methods: {
    authorize() {
      if (this.$v.$invalid) {
        console.log($v.password)
        this.$v.$touch()
        return
      }
      const user = {
        email: this.email,
        password: this.password
      }

      userService.saveUser(user)
      this.$router.push('/')
    }
  }
})
</script>


<style>

.auth-card{
  width:500px;
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
