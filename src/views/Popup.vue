<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" role="dialog">
      <div class="modal" ref="modal">
        <header class="modal-header">
          <slot name="header">
            <h2>
              This is the default tile!
            </h2>
          </slot>
          <button type="button" class="btn-close btn-right modal-close" @click="close" aria-label="Close modal">
            x
          </button>
        </header>

        <section class="modal-body">
          <slot name="body">
            I'm the default body!
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close');
    }
  },
};
</script>

<style lang="scss">
.modal-close {
  border: none;
  font-size: 20px;
  padding: 2px;
  cursor: pointer;
  font-weight: bold;
  color: $main-color2;
  background: transparent;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  min-width: 200px;
  max-width: 500px;
  width: 100%;
}

.modal-header {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  color: $main-color2;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}


</style>
