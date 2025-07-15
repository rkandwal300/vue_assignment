<script setup>
import { ref } from 'vue';

const name = ref("Rahul Kandwal");
const status = ref("pending");
const tasks = ref(["task 1", "task 2", "task 3", "task 3"]);
const url = ref("https://www.google.com");
const newTask = ref("")
function toggleStatus() {
  if (status.value == "active") {
    status.value = "pending";
  } else if (status.value == "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};
const addTask = (e) => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
}
const deleteTask = (index) =>{
  tasks.value.splice(index, 1)
}
</script>

<template>
  <h1>{{ name }}</h1>
  <form @submit.prevent="addTask">
    <label for="newTask"> Add Task</label>
    <input type="text" id="newTask" name="newTask" class="border" v-model="newTask" />
    <button type="submit"> Add</button>
  </form>
  <p v-if="status == 'active'">User is active</p>
  <p v-else-if="status == 'inactive'">User is inactive</p>
  <p v-else=>User is {{ status }}</p>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>
  <a :href="url" target="_blank">{{ "GOOGLE" }}</a>
  <br />
  <button @click="">click here</button>
</template>
