<template>
  <nav class="header__nav container">
    <ul class="menu" >

      <router-link
          v-for="link in links"
          :key="link.url"
          tag="li"
          :to="link.url"
          :exact="link.exact"
          class="menu__link"
      >
        <a>{{ link.title }}</a>
      </router-link>

    </ul>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      links: [
        {title: "home", url: "/", exact: true},
        {title: "Авторизация", url: "/auth"},
        {title: "Профиль", url: "/profile"},
        {title: "Статья", url: "/post"},
      ]
    };
  }
};

</script>

<style>
  .menu {
    list-style-type: none;
    display: flex;
  }

  li {
    margin-right: 25px;
    transition: .3s;
  }

  li:hover {
    border-bottom: 1px solid #424858;
  }

  li a {
    text-decoration: none;
    padding: 10px;
    color: black;
    font-size: 20px;
    text-transform: uppercase;
  }

</style>
