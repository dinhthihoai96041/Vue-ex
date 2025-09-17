import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

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
