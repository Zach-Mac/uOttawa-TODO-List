<template>
    <div class="calendar">
        <div class="column">
            <form class="form">
                <input placeholder="Enter Class" class="enterClass">
                <input class="time" type="time" placeholder="Enter Time">
                <select name="test" class="daySelector">
                    <option v-for="day in days" :value="day">{{day}}</option>
                </select>
                <input class="addClass" type="submit" value="Add Class to Schedule">
            </form>
                
            <table border = "1" class="table">
                <tr>
                    <th></th>
                    <th v-for="day in days">{{day}}</th>
                </tr>
                <tr></tr>

                    <tr v-for="time in numTimes">
                        <td>{{ toTime(time + timeStart - 1) }}</td>
                        <td v-for="day in days"></td>
                    </tr>

            </table>
        </div>
        
        <div class="column">
            <img src="@/assets/thanos.gif" alt="">
        </div>

    </div>
</template>

<script setup>
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

const timeStart = 8;
const numTimes = 12;

function toTime(time) {
    time = time % 12 + ":00 " + (parseInt(time / 12) % 2 == 0 ? "AM" : "PM");
    if (time == "0:00 AM") {
        time = "12:00 AM";
    } else if (time == "0:00 PM") {
        time = "12:00 PM";
    }
    return time;
}
</script>

<style scoped>

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

@media (max-width: 1200px) {
    .calendar {
        flex-direction: column;
    }
}
/* style addClass. It should be thin, and inline with the rest of the inputs. Also make it green. */
.addClass {
    width: 150px;
    height: 30px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    margin-left: 10px;
}

/* style time */
.time {
    width: 150px;
    height: 30px;
    border: 1;
    border-radius: 5px;
    margin-left: 10px;
}

/* style daySelector. give it a border */
.daySelector {
    width: 150px;
    height: 30px;
    border: 1;
    border-radius: 5px;
    margin-left: 10px;
}

.enterClass {
    width: 150px;
    height: 30px;
    border: 1;
    border-radius: 5px;
    margin-left: 10px;
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
/* make all entries in table the same width */
table {
  table-layout: fixed ;
  width: 100% ;
}

</style>