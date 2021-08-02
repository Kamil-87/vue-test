<template>
  <transition name="popup-add-post">
    <div class="modal-backdrop">
      <div class="modal"
           role="dialog"
           aria-labelledby="modalTitle"
           aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <h4>
            Добавить статью
          </h4>
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button>

        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <form class="form-box" @submit.prevent="submitHandler">
            <div class="form-group">
              <label for="titlePost">
                <input
                  name="titlePost"
                  id="titlePost"
                  type="text"
                  placeholder="Название статьи"
                  v-model="formData.title"
                >
              </label>
            </div>

            <div class="form-group">
              <label for="descriptionPost">
                <textarea
                  name="descriptionPost"
                  id="descriptionPost"
                  placeholder="Описание статьи"
                  v-model="formData.description"
                />
              </label>
            </div>

            <div class="form-group">
              <label for="imagePost">
                <input
                  name="imagePost"
                  id="imagePost"
                  type="text"
                  placeholder="Картинку"
                  v-model="formData.image"
                >
              </label>
            </div>

            <button class="btn" type="submit">Добавить</button>
          </form>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
import idGenerator from "../utils/idGenerator"

const date = new Intl.DateTimeFormat('ru-Ru', {'year': 'numeric', 'month': 'numeric', 'day': 'numeric'}).format(new Date())

export default {
  data: () => ({
    formData: {
      title: '',
      description: '',
      image: null,
    }
  }),
  methods: {
    close() {
      this.$emit('close')
    },
    submitHandler() {
      const newPost = {
        id: idGenerator.uuidv4(),
        title: this.formData.title,
        description: this.formData.description,
        image: 'post-image.jpg',
        date: date
      }
      console.log('create post', date)
      this.$store.dispatch('createPost', newPost)
    }
  },
};
</script>

<style>
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
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  min-width: 500px;
  min-height: 200px;
}

.modal-header {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #3897F0;
  justify-content: space-between;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 2px;
  cursor: pointer;
  font-weight: bold;
  color: #3897F0;
  background: transparent;
}

.form-box {
  padding: 0 20px;
}

.form-group {
  margin-bottom: 20px;
}

input {
  display: block;
  width: 100%;
  margin: 4px;
  padding: 10px 15px;
  border: 1px solid rgb(178, 178, 178);
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(168, 168, 168, 0.6) inset;
  transition: all 0.2s linear;
}

textarea {
  display: block;
  width: 100%;
  margin: 4px;
  height: 80px;
  padding: 10px 15px;
  border: 1px solid rgb(178, 178, 178);
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(168, 168, 168, 0.6) inset;
  transition: all 0.2s linear;
}

</style>
