<template>
	<button
		class="classButton"
		:class="{ completed: completed }"
		@click="completed = !completed"
	>
		<s v-if="completed">
			{{ name }}
		</s>
		<b v-else>
			{{ name }}
		</b>
	</button>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
	name: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		default: false
	}
})

const completed = ref(props.completed)
</script>

<style scoped>
/* make the class button background a bright blue with big bold
 white text and a slim black border
 also, make it fit the width of the parent table slot */
.classButton {
	width: 100%;
	height: 100%;
	background-color: blue;
	color: white;
	border: 1px solid black;
	border-radius: 5px;
	font-size: 1em;
	font-weight: bold;
}

/* make the class button background red with black text when it is completed */
.classButton.completed {
	background-color: red;
	color: black;
}
</style>
