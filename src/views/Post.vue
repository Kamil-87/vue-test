<template>
  <div>

    <h2>Статьи {{ $route.params.id }} </h2>
    <div
        class="posts__item post"

    >

<!--      <h2 class="post__title">{{post.title}}</h2>-->
      <div class="post__body">
        <div class="post__img">
          изображение
        </div>
<!--        <p class="post__text">{{post.description}}</p>-->
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "post",
  props: {
    postData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    postId() {
      return this.$route.params.id;
    }
  },
  created() {
    console.log("id: ", this.$route.params.id)
  }
}
</script>


<style>
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
  border: 1px solid #000;
  margin-bottom: 25px;
}

.post__text {

}
</style>
