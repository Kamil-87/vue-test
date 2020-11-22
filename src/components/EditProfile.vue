<template>
  <form class="form-box">
    <div class="form-group">
      <label for="name">
        <input
            id="name"
            type="text"
            placeholder="Ваше имя"
            :value="this.userName"
            @input="editUserName"
        >
      </label>
    </div>

    <div class="form-group">
      <label for="profileInfo">
        <textarea id="profileInfo" placeholder="О себе"
                  :value="this.userAbout"
                  @input="editUserAbout"/>
      </label>
    </div>
  </form>
</template>

<script>

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
    editUserName(e) {
      this.$store.commit("setUserName", e.target.value)
    },
    editUserAbout(e) {
      this.$store.commit("setAbout", e.target.value)
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
