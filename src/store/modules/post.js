export default {
  state: {
    posts: JSON.parse(localStorage.getItem('posts')) ?? [
      {
        "id": "1",
        "title": "Страница “Главная”",
        "description": "После “Авторизации”",
        "image": "post-image.jpg",
        "date": "10.07.2021"
      },
      {
        "id": "2",
        "title": "Страница “Статьи”",
        "description": " На этой странице выводим всю информацию о статье, и кнопка с возможностью редактирования статьи, при ее нажатии всплывает попап с полям в которые вписана вся информация и ее можно редактировать. При нажатии на кнопку сохранить информация сохраняется.\n",
        "image": "post-image.jpg",
        "date": "08.07.2021"
      },
      {
        "id": "3",
        "title": "Страница “Профиля”",
        "description": "На этой странице надо вывести всю информацию о пользователе с возможностью ее редактирования. Редактирование происходит так же как со статьей в попапе. Также на этой странице есть возможность добавления новой статьи, при нажатии на соответствующую кнопку появляется попап с полями для добавления. Все поля обязательные. При нажатии на кнопку добавить, статья сохраняется в хранилище в JSON формате, дата добавления создается автоматически. ",
        "image": "post-image.jpg",
        "date": "11.07.2021"
      }
    ]
  },
  mutations: {
    createPost(state, post) {
      state.posts.push(post)
      localStorage.setItem('posts', JSON.stringify(state.posts))
    },
    changePost(state, post) {
      const idx = state.posts.findIndex(p => p.id === post.id)
      state.posts[idx] = post
      localStorage.setItem('posts', JSON.stringify(state.posts))
    }
  },
  actions: {
    createPost({commit}, post) {
      commit('createPost', post)
    },
    changePost({commit}, post) {
      commit('changePost', post)
    }
  },
  getters: {
    posts: state => state.posts,
    postById: state => id => state.posts.find(p => p.id === id)
  }
}
