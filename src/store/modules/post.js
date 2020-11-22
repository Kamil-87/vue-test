export default {
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
      localStorage.setItem("posts", JSON.stringify(state.posts))
    },
    addPost(state, post) {
      state.posts.push(post)
      localStorage.setItem("posts", JSON.stringify(state.posts))
    }
  },
  actions: {
  },
  getters: {
    allPosts(state) {
      return state.posts
    }
  }
}
