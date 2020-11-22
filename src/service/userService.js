import store from '@/store'

function currentUser() {
  return JSON.parse(localStorage.getItem("currentUser"))
}

function saveUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user))
  fetch('/data/user-about.json')
    .then(response => response.json())
    .then(data => {
      user.about = data.about
      store.commit("setUserName", user.name)
      store.commit("setAbout", user.about)
    })
}

function logout() {
  localStorage.clear()
}

export default {
  saveUser,
  currentUser,
  logout
}
