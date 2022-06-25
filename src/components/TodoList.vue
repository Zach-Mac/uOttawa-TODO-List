<template>
    <div class="todos">
        <ul>
            <li className="h3" v-for="todo in todos2"><div class="listText">{{todo.text}}<span class="classText">{{"   " + todo.class}}</span><span class="dueDateText">{{"   " + todo.dueDate}}</span></div></li>
        </ul>
        
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    // state
    // const todos = ref([{text: "", class: "", dueDate: ""}]);
    const t2 = {text: "Finish Assignment 2", class: "CSI 3140", dueDate: "June 25th"};
    const t3 = {text: "Finish Assignment 3", class: "CSI 3140", dueDate: "June 31st"};
    const todos2 = ref([t2,t3]);
    // actions
    function addTodo(t) {
        var newArray = [t, ...todos];
        setTodos(newArray);
    }


    function deleteTodo(t) {
        var newArray = todos.filter(n => n.id != t.id);
        setTodos(newArray);
    }

    function editTodo(t) {
        var userInput = prompt('Update your Todo');
        t.text = userInput;
        var newArray = [...todos];
        setTodos(newArray);
    }

</script>

<style scoped>

    li {
    list-style-type: none;
    margin-top: 10px;
    cursor: pointer;
    }

    li:hover {
    list-style-type: none;
    margin-top: 10px;
    cursor: pointer;
    color: rgb(143,0,26);
    }

    .todos {
        display: flex;
        justify-content: center;
    }
    

</style>