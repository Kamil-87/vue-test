<template>
  <footer>
    &copy;&nbsp;{{ year }}&nbsp;Проект в рамках обучения, разрешается копировать всем кто захочет
  </footer>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    year() {
      return new Intl.DateTimeFormat('ru-Ru', {'year': 'numeric'}).format(new Date())
    }
  }
}
</script>

<style lang="scss">
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: #424858;
  color: #ffffff;
  font-size: 14px;

  a {
    margin-right: 15px;
  }
}
</style>
