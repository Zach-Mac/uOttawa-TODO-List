<template>
  <img alt="UofO logo" src="/UOttawaLogo.png" class="logo">
  <div class="links">
    <h1>uOttawa TODO List</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/classes">Classes</router-link> |
    <router-link to="/homework">Homework</router-link> |
    <router-link to="/about">About</router-link>
  </div>

  <router-view />

</template>

<script setup>
</script>

<style>
@import '@/assets/base.css';

/* center links class and newline after h1 */
.links {
  text-align: center;
  margin-top: 1rem;
}
</style>