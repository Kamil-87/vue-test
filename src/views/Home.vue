<template>
  <main class="main">
    <div class="container">
      <div class="main__top">
        <button class="btn">дата</button>
        <button class="btn">алфавит</button>
        <button class="btn" v-on:click="addPost">добавить пост</button>
      </div>

      <div
          class="card-box"
          v-for="post in allPosts"
          :key="post.id"
          :postData="post"
      >
        <article>
          <router-link class="card" :to="{ name: 'post', params: { id: post.id }}">
            <div class="card__img-left">
              <img :src=" require('../assets/images/' + post.image) " alt="">
            </div>
            <div class="card__content">
              <h3 class="card__title">{{ post.title }}</h3>
              <p class="card__description">
                {{ post.description | maxLengthText }}
              </p>
              <p class="card__author"><em>{{ post.author }}</em></p>
              <p class="card__date"><small class="text-muted">Creation date</small></p>
            </div>
          </router-link>
        </article>

      </div>
    </div>
  </main>
</template>


<script>
import maxLengthText from "../utils/maxLengthText";
import postService from "../service/postService";

export default {
  name: "home",
  filters: {
    maxLengthText
  },
  computed: {
    allPosts() {
      return this.$store.getters.allPosts
    }
  },
  beforeCreate() {
    postService.refreshState()
  },
  methods: {
    addPost() {
      const newPost = {
        title: "Новый пост",
        description: "аватарка пользователя с именем при нажатии на этот блок попадаем на страницу пользователя и поле для поиска статьи по имени.\nНа этой странице выводятся карточки (статьи), в которой находиться дата добавления, фотография, тема статьи, контент не более 25 символов и если контента больше показать “...”, автора статьи (Имя автора).\nПри нажатии на карточку пользователь попадает на страницу статьи.\nПоиск происходит в момент ввода текста, НЕ по нажатию на кнопку найти (ее не должно быть).\nСделать сортировку по дате добавления и алфавиту.\n",
        image: "post-image.jpg"
      }

      postService.addPost(newPost)
    }
  }
}
</script>

<style lang="scss">


a {
  text-decoration: none;
  color: inherit;
}

.card {
  display: flex;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.card:hover {
  box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25);
  cursor: pointer;
}

.card__img-left {
  width: 200px;
  margin-right: 10px;
  border: 1px solid #ccc;
}

.card__img-left img {
  width: 200px;
}

.card__content {

}

.card__title {
  margin-bottom: 10px;
}

.card__description {
  margin-bottom: 10px;
}

.card__author {
  margin-bottom: 10px;
}

.card__date {
  margin-bottom: 10px;
  color: #999999
}

.home__header {
  padding-top: 20px;
}

.home__select {
  padding: 5px 15px;
}

.search {
  width: 60%;
  margin-right: 50px;
  padding: 5px 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
}

</style>
