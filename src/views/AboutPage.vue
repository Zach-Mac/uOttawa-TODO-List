<template>
  <h2 class="group">
    Website created for CSI3140 class by Zachary MacDonald 300120841, Zachary Stempowicz 300136018 and
    Liam MacLean 300128405
  </h2>
  <p class="description">
    It is a tool to stay organized with uOttawa homework and keeping up to date on lecture, lab, and tutorial
    recordings.
    <br>
    For Assignment 1, this is only the HTML for the site with no css or js.
  </p>

  <a href="home.html" class="home">Home</a>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style>
@import '@/assets/base.css';

/* make group class red comic sans*/
.group {
  font-family: "Comic Sans MS", cursive, sans-serif;
  color: red;
}

/* make description class blue Times new Roman*/
.description {
  font-family: "Times New Roman", Times, serif;
  color: blue;
}
</style>
