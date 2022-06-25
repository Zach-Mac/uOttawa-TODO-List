<template>
    <h2>Homework List</h2>
    <form>
        <input style="margin-right: 10px;" type="text" placeholder="Please enter your assignment" name="enter-todo">
        <input style="margin-right: 10px;" type="text" placeholder="Please enter your class" name="enter-class">
        <input type="text" placeholder="Please enter the due date" name="enter-duedate">
        <button @click="{}" >Submit</button>
    </form>
</template>

<script setup>
    import {ref} from 'vue'

    function submit() {
        
    }

    

</script>
    
<style scoped>
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