<template>
  <div class="todo">
    <h1>Vue.js To-Do List ✅</h1>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }} <button @click="removeTask(index)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push(this.newTask)
        this.newTask = ''
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    }
  }
}
</script>

<style>
.todo {
  text-align: center;
  margin-top: 50px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 5px 0;
}
button {
  margin-left: 10px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}
</style>

