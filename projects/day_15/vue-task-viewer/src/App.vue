<template>
  <div id="app">
    <h1>Task List</h1>
    <ul v-if="tasks.length">
      <li v-for="task in tasks" :key="task.id">{{ task.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: []
    };
  },
  created() {
    fetch("http://localhost:8081/tasks")
      .then(response => response.json())
      .then(data => {
        this.tasks = data;
      });
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>

