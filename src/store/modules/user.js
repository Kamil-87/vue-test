export default {
  state: {
    name: '',
    about: ''
  },
  mutations: {
    setUserName(state, name) {
      state.name = name
      localStorage.setItem("username", JSON.stringify(state.name))
    },
    setAbout(state, about) {
      state.about = about
      localStorage.setItem("about", JSON.stringify(state.about))
    }
  },
  actions: {
  },
  getters: {
    getUserName(state) {
      return state.name
    },
    getUserAbout(state) {
      return state.about
    }
  }
}
