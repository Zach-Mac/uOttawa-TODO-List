<template>
    <div className="todos">
        <li v-for="todo in todos2"><div class="listText">{{todo.text}}<span class="classText">{{"   " + todo.class}}</span><span class="dueDateText">{{"   " + todo.dueDate}}</span></div></li>
            
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    // state
    // const todos = ref([{text: "", class: "", dueDate: ""}]);
    const t2 = {text: "hello", class: "hello", dueDate: "date"};
    const todos2 = ref([t2,t2]);
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

<style>
    
</style>