<template>
  <div class="popup-layout">
    <div class='v-popup'>
      <div class="v-popup__header">
        <span>{{popupTitle}}</span>
        <span>
        <i
            @click="closePopup"
        >
          close
        </i>
      </span>
      </div>
      <div class="v-popup__content">
        <router-view />
      </div>
      <div class="v-popup__footer">
        <button class="close_modal" @click="closePopup">Close</button>
        <button
            class="submit_btn"
            @click="rightBtnAction"
        >
          {{rightBtnTitle}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup-layout",
  methods: {
    rightBtnAction() {
      this.$emit('rightBtnAction')
    },
    closePopup() {
      this.$emit('closePopup')
    }
  }
}
</script>

<!--<style lang="scss">-->
<!--.popup_wrapper {-->
<!--  background: rgba(64,64,64, .4);-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  position: absolute;-->
<!--  right: 0;-->
<!--  left: 0;-->
<!--  top: 0;-->
<!--  bottom: 0;-->
<!--}-->
<!--.v-popup {-->
<!--  padding: 16px;-->
<!--  position: fixed;-->
<!--  top: 50px;-->
<!--  width: 400px;-->
<!--  background: #ffffff;-->
<!--  box-shadow: 0 0 17px 0 #e7e7e7;-->
<!--  z-index: 10;-->
<!--  &__header, &__footer {-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--    align-items: center;-->
<!--  }-->
<!--  &__content {-->
<!--    display: flex;-->
<!--    justify-content: center;-->
<!--    align-items: center;-->
<!--  }-->
<!--  .submit_btn {-->
<!--    padding: 8px;-->
<!--    color: #ffffff;-->
<!--    background: #26ae68;-->
<!--  }-->
<!--  .close_modal {-->
<!--    padding: 8px;-->
<!--    color: #ffffff;-->
<!--    background: red;-->
<!--  }-->
<!--}-->
<!--</style>-->
