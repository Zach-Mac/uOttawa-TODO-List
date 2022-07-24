<template>
	<form @submit="addClass" class="form">
		<input placeholder="Enter Class" class="enterClass" />
		<select class="selectTimeSlot">
			<option value="">Select Timeslot</option>
			<option v-for="timeSlot in timeSlots.length" :value="timeSlot">
				{{ toTime(timeSlots[timeSlot - 1]) }}
			</option>
		</select>

		<select name="test" class="daySelector">
			<option v-for="day in days" :value="day">{{ day }}</option>
		</select>
		<button class="addClassButton" type="submit">Add Class</button>
	</form>

	<table border="1" class="table">
		<tr>
			<th></th>
			<th v-for="day in days">{{ day }}</th>
		</tr>
		<tr></tr>

		<tr v-for="(time, index) in timeSlots">
			<td>{{ toTime(time) }}</td>

			<td v-for="day in days">
				<ClassButton
					v-if="classes[day][index]"
					:name="classes[day][index].name"
					:completed="classes[day][index].completed"
				/>
			</td>
		</tr>
	</table>
</template>

<script setup>
import { ref } from 'vue'
import ClassButton from '../components/ClassButton.vue'
const days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday'
]

const timeStart = 8
const timeEnd = 21

let timeSlots = []
for (let i = timeStart; i <= timeEnd; i += 1.5) {
	timeSlots.push(i)
}

// toTime converts a time slot number to a string
function toTime(timeSlot) {
	const hour = Math.floor(timeSlot)
	const minute = Math.round((timeSlot - hour) * 60)
	const ampm = hour < 12 ? 'AM' : 'PM'

	// convert hour to 12-hour format and add trailing 0 to minutes if necessary
	const hour12 = hour % 12 || 12
	const minuteString = minute < 10 ? `0${minute}` : minute
	return `${hour12}:${minuteString} ${ampm}`
}

const classes = ref([])
days.forEach(day => {
	classes.value[day] = []
	//   for (let i = 0; i < numTimes; i++) {
	//     classes.value[day][i] = null;
	//   }
})

// addClass adds a class to the schedule
function addClass(e) {
	e.preventDefault()
	const form = e.target
	const name = form.querySelector('.enterClass').value
	const timeSlot = form.querySelector('.selectTimeSlot').value
	const day = form.querySelector('.daySelector').value
	classes.value[day][timeSlot - 1] = {
		name,
		completed: false
	}
	console.log('classes', classes.value)
}

classes.value['Monday'][2] = {
	name: 'Math',
	completed: false
}

console.log('classes', classes.value)
</script>

<style scoped>
/* td height */
.table td {
	height: 5rem;
	/* center text */
	text-align: center;
	/* bold text */
	font-weight: bold;
}

/* column classes are side by side */
.column {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 100%;
}

/* elements inside calendar classes are all on the same line.
if the display width is less than 1200px, the calendar will be in a row */
.calendar {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}

/* style submit button. It should be thin, and inline with the rest of the inputs. Also make it green. */
.addClassButton {
	display: inline-block;
	width: 100px;
	height: 30px;
	background-color: green;
	color: white;
	border: 1px solid black;
	border-radius: 5px;
}

/* submit button should change when clicked */
.addClassButton:hover {
	background-color: #00ff00;
}

/* style selecttimeslot */
.selectTimeSlot {
	width: 150px;
	height: 30px;
	color: black;
	border: 1;
	border-radius: 5px;
	font-size: 1.5rem;
	margin-left: 10px;
}

/* style daySelector. give it a border */
.daySelector {
	width: 150px;
	height: 30px;
	border: 1;
	border-radius: 5px;
	font-size: 1.5rem;
	margin-left: 10px;
}

.enterClass {
	width: 350px;
	height: 30px;
	border: 1;
	border-radius: 5px;
	margin-left: 10px;
	font-size: 1.5rem;
}

/* form class shoud line up */
.form {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
	width: 100%;
	height: 100%;
	min-width: 100%;
	height: 100%;
}
</style>
