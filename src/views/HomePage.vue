<template>
    <p class="class1">
        This is a static HTML implementation of our project. In its current state, it is not functional. Many features
        will be added as we submit more deliverables.
    </p>
    <p class="class2">
        This is a tool to stay organized with uOttawa homework and keeping up to date on lecture recordings.
    </p>

    <div class="router">
        <router-link to="/classes">Keep track of your <b>classes</b> on the Classes page </router-link>
    </div>
    <div class="router">
        <router-link to="/homework">And stay up to date on your home work on the <b>Homework</b> page </router-link>
    </div>


</template>

<script setup>

</script>

<style scoped>
/* center the p text wtih flex and justify content */
p {
    display: flex;
    justify-content: center;
}

/* center the router-link text with flex and justify content */
.router {
    display: flex;
    justify-content: center;
}

/* make class1 class red comic sans */
.class1 {
    font-family: "Comic Sans MS", cursive, sans-serif;
    color: red;
}

/* make class2 class blue Times new Roman and slightly large but smaller on phone screens*/
.class2 {
    font-family: "Times New Roman", Times, serif;
    color: blue;
    font-size: 1.2rem;
    @media (max-width: 600px) {
        font-size: 1rem;
    }
}
</style>
