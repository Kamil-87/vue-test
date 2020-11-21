<template>
  <div class="home">

    <div class="home__header">
      <input type="text" class="search" placeholder="Найти статью">
      <select class="home__select">
        <option value="дате">дате</option>
        <option value="алфавиту">алфавиту</option>
      </select>
    </div>

    <div
        class="card-box"
        v-for="post in allPosts"
        :key="post.id"
        :postData="post"
    >
      <article>
        <router-link
            class="card"
            tag="a"
            :to="linkOpen"
            :postData="post"
        >
          <div class="card__img-left">
            <img :src=" require('../assets/images/' + post.image) "  alt="">
            {{post.image}}
          </div>
          <div class="card__content">
            <h3 class="card__title">{{post.title}}</h3>
            <p class="card__description">
              {{ post.description | maxLengthText }}
            </p>
            <p class="card__author"><em>{{post.author}}</em></p>
            <p class="card__date"><small class="text-muted">Creation  date</small></p>
          </div>
        </router-link>
      </article>

    </div>

  </div>
</template>


<script>
import maxLengthText from "@/filters/maxLengthText";

export default {
  name: "home",
  data() {
    return {
      allPosts: [
        {
          "id": 1,
          "title": "Страница “Главная”",
          "description": "После “Авторизации” пользователь попадает на главную страницу. \n В шапке этой страницы располагается: аватарка пользователя с именем при нажатии на этот блок попадаем на страницу пользователя и поле для поиска статьи по имени.\nНа этой странице выводятся карточки (статьи), в которой находиться дата добавления, фотография, тема статьи, контент не более 25 символов и если контента больше показать “...”, автора статьи (Имя автора).\nПри нажатии на карточку пользователь попадает на страницу статьи.\nПоиск происходит в момент ввода текста, НЕ по нажатию на кнопку найти (ее не должно быть).\nСделать сортировку по дате добавления и алфавиту.\n",
          "author": "Author",
          "image": "post-image.jpg"
        },
        {
          "id": 2,
          "title": "Страница “Статьи”",
          "description": " На этой странице выводим всю информацию о статье, и кнопка с возможностью редактирования статьи, при ее нажатии всплывает попап с полям в которые вписана вся информация и ее можно редактировать. При нажатии на кнопку сохранить информация сохраняется.\n",
          "author": "Author",
          "image": "post-image.jpg"
        },
        {
          "id": 3,
          "title": "Страница “Профиля”",
          "description": "На этой странице надо вывести всю информацию о пользователе с возможностью ее редактирования. Редактирование происходит так же как со статьей в попапе. Также на этой странице есть возможность добавления новой статьи, при нажатии на соответствующую кнопку появляется попап с полями для добавления. Все поля обязательные. При нажатии на кнопку добавить, статья сохраняется в хранилище в JSON формате, дата добавления создается автоматически. ",
          "author": "Author",
          "image": "post-image.jpg"
        }
      ]
    }
  },
  filters: {
    maxLengthText
  },
  computed: {
    linkOpen() {
      return `/`
    }
  }
}
</script>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }

  .home {
    width: 600px;
    margin: 0 auto;
  }

  .card {
    display: flex;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
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
