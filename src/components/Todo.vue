<template>
    <div>
        <h2>代办清单</h2>
        <input type="text" v-model="newTodoText" placeholder="请输入新的待办事项">
        <button @click="myAddTodo">添加</button>
    </div>

    <ul>
        <li v-for="(todo, index) in myTodos" :key="todo.id">
            <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
            <button @click="myToggleTodo(index)">{{ todo.completed ? '未完成' : '已完成' }}</button>
            <button @click="myRemoveTodo(index)">删除</button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useTodoStore } from "../stores/useTode";
import { ref } from "vue";

const todoStroe = useTodoStore();

const newTodoText = ref("");

const myAddTodo = () =>{
    if (newTodoText.value.trim()) {
        todoStroe.addTodo(newTodoText.value);
        newTodoText.value = "";
    }
};

const myRemoveTodo = (index:number)=>{
    todoStroe.removeTodo(index);
}

const myToggleTodo = (index: number) => {
    todoStroe.toggleTodo(index);
}

const myTodos = todoStroe.todos;
</script>

<style scoped>

</style>