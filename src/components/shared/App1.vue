<script>
export default {
  data() {
    return {
      name: "Rahul",
      status: "pending",
      tasks: ["task 1", "task 2", "task 3", "task 3"],
      url: "https://www.google.com",
    };
  },
  methods: {
    toggleStatus() {
      if (this.status == "active") {
        this.status = "pending";
      } else if (this.status == "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status =='active'">User is active</p>
  <p v-else-if="status =='inactive'">User is inactive</p>
  <p v-else=>User is {{status}}</p>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a :href="url" target="_blank">{{ "GOOGLE" }}</a>
  <br />
  <button @click="toggleStatus">click here</button>
</template>
