<template>
  <form class="form-box">
    <div class="form-group">
      <label for="name">
        <input
            id="name"
            type="text"
            placeholder="Ваше имя"
            v-bind:value="this.userName"
        >
      </label>
    </div>

    <div class="form-group">
      <label for="profileInfo">
        <textarea id="profileInfo" placeholder="О себе"
                  v-bind:value="this.userAbout"/>
      </label>
    </div>
    <button class="btn" type="submit" @click="editUser">Сохранить</button>
  </form>
</template>

<script>
import userService from "../service/userService";

export default {
  computed:{
    userName() {
      return this.$store.getters.getUserName
    },
    userAbout(){
      return this.$store.getters.getUserAbout
    }
  },
  methods: {
    editUser() {
      userService.updateUser(this.userName, this.userAbout)
    }
  }
}
</script>


<style>
.form-box {
  padding: 0 20px;
}

.form-group {
  margin-bottom: 20px;
}

input {
  margin: 0;
}

textarea {
  display: block;
  width: 100%;
  height: 80px;
  padding: 10px 15px;
  border: 1px solid rgb(178, 178, 178);
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(168, 168, 168, 0.6) inset;
  transition: all 0.2s linear;
}

</style>
