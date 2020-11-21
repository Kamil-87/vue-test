function currentUser() {
  return localStorage.getItem("currentUser")
}

function saveUser(user) {
  localStorage.setItem("currentUser", user)
}

function clearCurrentUser() {
  localStorage.clear()
}

export default {
  saveUser,
  currentUser,
  clearCurrentUser
}
