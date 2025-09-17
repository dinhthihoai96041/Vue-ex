<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="app">
    <div class="todo-container">
      <h1>Todo App</h1>

      <!-- Input + Add Button -->
      <div class="input-section">
        <input 
          v-model="newTodo" 
          @keyup.enter="addTodo"
          type="text" 
          placeholder="Add your new todo"
        />
        <button @click="addTodo" class="add-btn">+</button>
      </div>

      <!-- Todo List -->
      <ul class="todo-list">
        <li v-for="(todo, index) in todos" :key="index" class="todo-item">
          <span class="todo-text">{{ todo }}</span>
          <button @click="deleteTodo(index)" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </li>
      </ul>

      <!-- Footer -->
      <div class="footer" v-if="todos.length">
        <p>You have {{ todos.length }} pending tasks</p>
        <button @click="clearAll" class="clear-btn">Clear All</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      todos: []
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    clearAll() {
      this.todos = [];
    }
  }
};
</script>
