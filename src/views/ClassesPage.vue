<template>
    <form>
        <input placeholder="Enter Class">
        <input type="time" placeholder="Enter Time">
        <select name="test">
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
        </select>
        <input type="submit" value="Add Class to Schedule">
    </form>
   <table border = "1">
    <tr>
        <th></th>
        <th v-for="day in days">{{day}}</th>
    </tr>
    <tr></tr>
    <!-- v-for from 0 to 24 -->

    <tr v-for="time in numTimes">
        <td>{{toTime(time +timeStart-1)}}</td>
        <td v-for="day in days"></td>
    </tr>

   </table>
</template>

<script>
    export default {
        data: function() {
           return {
            days: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            timeStart : 8,
            numTimes : 12
           }
        },
        methods : {
            toTime(time) {
                time = time % 12 + ":00 " + (parseInt(time / 12) % 2 == 0 ? "AM" : "PM");
                if(time == "0:00 AM") {
                    time = "12:00 AM";
                } else if(time == "0:00 PM") {
                    time = "12:00 PM";
                }
                return time;
            }
        }
    }
</script>

<style>
    @import '@/assets/base.css';
    
</style>