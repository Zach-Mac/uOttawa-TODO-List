<template>

  <div class="background">
    <div class="links">
      <h1>uOttawa TODO List</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/classes">Classes</router-link> |
      <router-link to="/homework">Homework</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>

  <router-view />


</template>

<script setup>
</script>

<style>
@import '@/assets/base.css';

/* add background image in top left of uottawa logo */
.background {
  background-image: url('/UOttawaLogo.png');
  background-repeat: no-repeat;
  background-position: top left;
  background-size: contain;
  padding: 2rem;
  margin: 0 auto;
  max-width: 1280px;
}

/* center links class and newline after h1 */
.links {
  text-align: center;
  margin-top: 1rem;
}
</style>