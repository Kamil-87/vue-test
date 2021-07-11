<template>
  <div class="container" >
    <div
      class="posts__item post"
    >
      <h2 class="post__title">{{ post.title }}</h2>
      <div class="post__body">
        <div class="post__img">
          <img :src=" require(`../assets/images/${post.image}`)" :alt="post.title">
        </div>
        <h4 style="margin-bottom: 1rem;">Описание</h4>
        <p class="post__text">{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    post() {
      return this.$store.getters.postById(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss">
.posts__item {
  width: 600px;
  margin: 0 auto;
}

.post__title {
  text-align: center;
  margin-bottom: 25px;
}

.post__body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post__img {
  width: 300px;
  height: 200px;
  margin-bottom: 25px;

  img {
    width: 100%;
    height: 100%;
  }

}

.post__text {

}
</style>
