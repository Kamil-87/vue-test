<template>
  <div class="grey empty-layout">
    <router-view/>
  </div>
</template>


<style scoped>
.empty-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  height: 100vh
}

.grey {
  background: grey;
}
</style>
