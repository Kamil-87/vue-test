import store from '@/store'
import idGenerator from "./idGenerator";

function refreshState() {
  const posts = JSON.parse(localStorage.getItem("posts"))

  if (!posts) {
    fetch('/data/posts.json')
    .then(response => response.json())
    .then(data => {
      store.commit("setPosts", data)
    })
  } else {
    store.commit("setPosts", posts)
  }
}

function addPost(post) {
  post.id = idGenerator.uuidv4()
  store.commit("addPost", post)
}

export default {
  refreshState,
  addPost
}
