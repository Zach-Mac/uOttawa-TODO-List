<template>
    <p>
        This is a static HTML implementation of our project. In its current state, it is not functional. Many features
        will be added as we submit more deliverables.
    </p>
    <p>
        This is a tool to stay organized with uOttawa homework and keeping up to date on lecture recordings.
    </p>
    <p>
        Keep track of your classes on the <router-link to="/classes">Classes</router-link> page.
        <br>
        And stay up to date on your home work on the <router-link to="/homework">Homework</router-link> page.
    </p>
</template>

<script setup>

</script>

<style scoped>
/* center the p text wtih flex and justify content */
p {
    display: flex;
    justify-content: center;
}
</style>
