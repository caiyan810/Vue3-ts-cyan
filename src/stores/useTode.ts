import { defineStore } from "pinia";
import { ref } from "vue";

interface Todo{
    id: number;
    text: string;
    completed: boolean;
}

export const useTodoStore =defineStore('todo', () =>{
    const todos = ref<Todo[]>([]);

    const addTodo = (todoText: string) => {
        const newTode:Todo ={
            id:Date.now(),
            text: todoText,
            completed: false
        };
        todos.value.push(newTode);
    };

    const removeTodo = (index: number) => {
        todos.value.splice(index,1);
    };

    const toggleTodo = (index:number) =>{
        if(todos.value[index]){
            todos.value[index].completed = !todos.value[index].completed;
        }
    };

    return{
        todos,
        removeTodo,
        addTodo,
        toggleTodo,
    };
},
{
    persist: {
        key: 'my-todo-store',
        storage:sessionStorage,
    },
},
);