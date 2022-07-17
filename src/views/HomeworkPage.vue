<template>
  <TodoForm v-on:add-todo="addTodo"/>
  <TodoList :state="state"/>
</template>

<script setup>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
import { reactive, watch , ref} from 'vue';

var state = reactive({"todos": []})

function addTodo(t) {
  state["todos"].push(t)
}

</script>
  
<style scoped>
  
</style>
