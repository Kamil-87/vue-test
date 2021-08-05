<template>
  <div class="_touch">

    <nav
      class="menu__body"
      :class="{'_active': isActive}"
    >
      <ul class="menu__list">
        <router-link
          v-for="item of menu"
          :key="item.name"
          :to="item.to"
          tag="li"
        >
          <a class="menu__link">{{ item.title }}</a>
        </router-link>
      </ul>
    </nav>

  </div>
</template>

<script>

export default {
  props: {
    menu: {
      type: Array,
      default: () => [{to: '/', title: 'Главная'}]
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    logout() {
      this.$emit('logout')
    }
  }
}
</script>


<style>

</style>
