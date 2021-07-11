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
    setUserAbout(state, about) {
      state.about = about
      localStorage.setItem("about", JSON.stringify(state.about))
    },
    setAbout(state, about) {
      state.about = about
      localStorage.setItem("about", JSON.stringify(state.about))
    }
  },
  actions: {
    setUserName({commit}, name) {
      commit('setUserName', name)
    },
    setUserAbout({commit}, name) {
      commit('setUserAbout', name)
    }
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
