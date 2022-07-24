<template>
	<p class="class2">
		This is a tool to stay organized with uOttawa homework and keeping up to
		date on lecture recordings.
	</p>
	<p class="class1">
		Keep track of your classes on the &nbsp
		<router-link to="/classes"> Classes </router-link> &nbsp page And stay
		up to date on your home work on the &nbsp
		<router-link to="/homework"> Homework </router-link> &nbsp page
	</p>
</template>

<script setup></script>

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
	font-family: 'Comic Sans MS', cursive, sans-serif;
	color: red;
	font-size: 1.5rem;
}

/* make class2 class blue Times new Roman and slightly large but smaller on phone screens*/
.class2 {
	font-family: 'Times New Roman', Times, serif;
	color: blue;
	font-size: 2rem;
	@media (max-width: 600px) {
		font-size: 1rem;
	}
}
</style>
