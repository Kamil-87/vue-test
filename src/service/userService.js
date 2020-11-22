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

function refreshState() {
  const name = JSON.parse(localStorage.getItem("username"))
  if (!name) {
    return
  }
  store.commit("setUserName", name)
  const about = JSON.parse(localStorage.getItem("about"))

  if (!about) {
    fetch('/data/user-about.json')
      .then(response => response.json())
      .then(data => {
        store.commit("setAbout", data.about)
      })
  }else {
    store.commit("setAbout", about)
  }
}

export default {
  saveUser,
  currentUser,
  logout,
  refreshState
}
