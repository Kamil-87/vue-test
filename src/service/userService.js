function currentUser() {
  return localStorage.getItem("currentUser")
}

function saveUser(user) {
  localStorage.setItem("currentUser", user)
}

export default {
  saveUser,
  currentUser
}
