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
</style>
