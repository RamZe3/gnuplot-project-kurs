<template>
  <transition name="fade">
  <div v-if="this.$store.getters.ISLOADING" class="spinner-border text-primary" role="status">
    <span class="sr-only"></span>
  </div>
  </transition>
</template>

<script>
export default {
  name: "base-loading"
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>