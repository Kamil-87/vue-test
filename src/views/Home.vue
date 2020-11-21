<template>
  <div class="home">

    <div class="home__header">

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
      </article>

    </div>

  </div>
</template>


<script>
import maxLengthText from "@/utils/maxLengthText";

export default {
  name: "home",
  data() {
    return {
      allPosts: []
    }
  },
  created() {
    this.fetchData()
    },
  filters: {
    maxLengthText
  },
  computed: {

  },
  methods: {
    fetchData() {
      fetch('/data/posts.json')
          .then(response => response.json())
          .then(data => this.allPosts = data);
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
