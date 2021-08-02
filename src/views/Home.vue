<template>

  <div class="container">
    <div class="main__top">
      <button
        class="btn"
        @click="openPopup"
      >
        Добавить статью
      </button>

      <div class="articles-sort">
        <select name="sort" class="select-sort">
          <option value="byDate">По дате</option>
          <option value="alphabetically">По алфавиту</option>
        </select>
      </div>
    </div>

    <PopupAddPost
      v-if="showPopup"
      @close="closePopup"
    />

    <div
      class="card-box"
      v-for="post in allPosts"
      :key="post.id"
    >
      <article>
        <router-link class="card" :to="{ name: 'post', params: { id: post.id }}">
          <div class="card__img-left">
            <img :src=" require(`../assets/images/${post.image}`)" :alt="post.title">
          </div>
          <div class="card__content">
            <h3 class="card__title">{{ post.title }}</h3>
            <p class="card__description">
              {{ post.description | maxLengthText }}
            </p>
            <p class="card__author"><em>{{ post.author }}</em></p>
            <p class="card__date"><small class="text-muted">{{ post.date }}</small></p>
          </div>
        </router-link>
      </article>

    </div>
  </div>

</template>

<script>
import maxLengthText from "../filters/maxLengthText";
import PopupAddPost from "../views/PopupAddPost";

export default {
  name: "home",
  data: () => ({
    showPopup: false,

  }),
  components: {
    PopupAddPost
  },
  filters: {
    maxLengthText
  },
  computed: {
    allPosts() {
      return this.$store.getters.posts
    }
  },

  methods: {
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    }
  }
}
</script>

<style lang="scss">
.select-sort {
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  padding: .6em 1.4em .5em .8em;
  min-width: 200px;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, .04);
  border-radius: .5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url('../assets/images/select.svg');
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;
}

.select-sort::-ms-expand {
  display: none;
}

.select-sort:hover {
  border-color: #888;
}

.select-sort:focus {
  border-color: transparent;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}

.select-sort option {
  font-weight: normal;
  padding: 6px 28px 6px 0;
}

*[dir="rtl"] .select-sort, :root:lang(ar) .select-sort, :root:lang(iw) .select-sort {
  background-position: left .7em top 50%, 0 0;
  padding: .6em .8em .5em 1.4em;
}

.main__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

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
