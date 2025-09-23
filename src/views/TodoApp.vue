<script setup lang="ts">
import { ref } from "vue";
const newTodo = ref("");
const todos = ref<string[]>([]);

// const value = ref(null);

function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push(newTodo.value.trim());
    newTodo.value = "";
  }
}

function deleteTodo(index: number) {
  todos.value.splice(index, 1);
}

function clearAll() {
  todos.value = [];
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow-inner p-6 my-auto">
    <h1 class="text-left font-medium pb-2 text-2xl">Todo App</h1>

    <!-- Input -->
    <div class="flex mb-4">
      <InputText v-model="newTodo" @keyup.enter="addTodo" placeholder="Add new todo"  
        />

      <button @click="addTodo"
        class="bg-[#8d4be7] text-white ml-0.5 px-3 py-1 text-3xl font-[1000] rounded cursor-pointer text-center w-12 hover:bg-[#64decd] hover:text-blue-800 transition">
        +
      </button>
    </div>

    <!-- List -->
    <ul>
      <li v-for="(todo, index) in todos" :key="index"
        class="flex justify-between items-center bg-gray-100 hover:bg-gray-200 rounded mb-2">
        <span class="p-2">{{ todo }}</span>
        <button @click="deleteTodo(index)"
          class="bg-red-500 p-2 rounded opacity-0 hover:opacity-100 transition flex items-center justify-center h-full">
          <i class="fas fa-trash text-white text-xl"></i>
        </button>
      </li>
    </ul>

    <!-- Footer -->
    <div v-if="todos.length" class="flex justify-between items-center mt-4">
      <p class="text-gray-700 text-ms pr-4">
        You have {{ todos.length }} pending tasks
      </p>
      <button @click="clearAll"
        class="bg-[#8d4be7] text-white mt-2 px-2 py-1 rounded hover:bg-[#64decd] hover:text-blue-800 transition">
        Clear All
      </button>
    </div>
  </div>
</template>
