<template>
  <div class="popup popup__wrapper">

    <div class="popup__header">
      <span>{{ popupTitle }}</span>
    </div>

    <div class="popup__body">
      <form class="popup__form">
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
            Пароль не может быть меньше {{ $v.password.$params.minLength.min }}
          </small>
        </div>

        <div class="form-group">
          <label for="userAvatar">Выберите фотографию: </label>
          <input type="text" id="userAvatar">
        </div>

        <button class="auth-btn" type="submit">Войти</button>
      </form>
    </div>

    <div class="popup__footer">

    </div>

  </div>
</template>


<script>
export default {
  name: "popup",
  props: {}
}
</script>

<style lang="scss">
.popup {
  background: rgba(64, 64, 64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  &__form {

  }

  &__header, &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

}

.submit_btn {
  padding: 8px;
  color: #ffffff;
  background: #26ae68;
}

.close_modal {
  padding: 8px;
  color: #ffffff;
  background: red;
}
</style>
