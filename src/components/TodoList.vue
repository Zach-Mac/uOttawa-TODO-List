<template>
    <div class="todos">
        <ul>
            <li className="h3" v-for="todo in state.todos">
                <div class="listText">
                    {{todo.text}}
                    <span class="classText">{{"   " + todo.class}}
                    </span>
                    <span class="dueDateText">{{"   " + todo.dueDate}}</span>

                    <button class="deleteButton" @click="deleteTodo(todo)">X</button>
                </div>
            </li>
        </ul>
        
    </div>
</template>

<script setup>
    import {defineProps, watch, toRef, computed} from 'vue'
    const props = defineProps(['state'])

    function deleteTodo(t) {
        var newArray = props.state.todos.filter(todo => todo.text != t.text);
        props.state.todos = newArray;
    }

</script>

<style scoped>
    /* style deleteButton */
    .deleteButton {
        background-color: #ff0000;
        border-radius: 5px;
        border: 1px solid #ff0000;
        color: white;
        padding: 5px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }

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