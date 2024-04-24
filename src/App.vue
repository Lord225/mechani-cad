<script setup lang="ts">
import NavBar from './components/common/NavBar.vue'
</script>

<style lang="scss">
@import 'src/assets/styles.scss';
@import 'bootstrap/dist/css/bootstrap.min.css';
</style>

<template>
  <NavBar />
  <div>
    <router-view />
  </div>
</template>