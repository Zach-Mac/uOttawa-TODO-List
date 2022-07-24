<template>
	<h2>Homework List</h2>
	<form @submit="submit">
		<input
			style="margin-right: 10px"
			type="text"
			placeholder="Please enter your assignment"
			name="todo"
		/>
		<input
			style="margin-right: 10px"
			type="text"
			placeholder="Please enter your class"
			name="class"
		/>
		<input
			type="text"
			placeholder="Please enter the due date"
			name="duedate"
		/>
		<button type="submit">Submit</button>
	</form>
</template>

<script setup>
const emit = defineEmits(['add-todo'])

function validateForm(e) {
	//ensure that the form is not empty
	if (
		e.target.todo.value == '' ||
		e.target.class.value == '' ||
		e.target.duedate.value == ''
	) {
		alert('Please fill out all fields')
		return false
	}
	return true
}
function submit(e) {
	e.preventDefault()

	if (!validateForm(e)) {
		return
	}

	let data = {
		text: e.target.todo.value,
		class: e.target.class.value,
		dueDate: e.target.duedate.value
	}

	//emit the event to the parent component
	emit('add-todo', data)
}
</script>

<style scoped>
/* input width bigger */
input {
	width: 300px;
}
h2 {
	margin-top: 20px;
	margin-bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}
form {
	display: flex;
	justify-content: center;
	align-items: center;
}
button {
	width: 150px;
	height: 30px;
	background-color: green;
	color: white;
	border: none;
	border-radius: 5px;
	margin-left: 10px;
	cursor: pointer;
}
</style>
