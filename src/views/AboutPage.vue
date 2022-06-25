<template>
  <div class="easter-egg"></div>
  <h2 class="group">
    Website created for CSI3140 class by Zachary MacDonald 300120841, Zachary Stempowicz 300136018 and
    Liam MacLean 300128405
  </h2>
  <p class="description">
    It is a tool to stay organized with uOttawa homework and keeping up to date on lecture, lab, and tutorial
    recordings.
    <br>
    For Assignment 2, this is only the HTML and CSS with no working JS.
  </p>
</template>

<script setup>
</script>

<style scoped>

/* add and easter egg where if the user is using a phone screen, an image of an easter egg appears */
@media (max-width: 1200px) {
  .group {
    display: none;
  }
  .description {
    display: none;
  }
  .easter-egg {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url('/easter-egg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}


/* make group class red comic sans*/
.group {
  font-family: "Comic Sans MS", cursive, sans-serif;
  color: red;
  display: flex;
  justify-content: center;
}

/* make description class blue Times new Roman*/
.description {
  font-family: "Times New Roman", Times, serif;
  color: blue;
  display: flex;
  justify-content: center;
}
</style>
