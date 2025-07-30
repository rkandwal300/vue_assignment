<script setup>

import { onBeforeMount, onMounted } from 'vue'
import Navbar from './components/shared/Navbar.vue';
onBeforeMount(() => {
  console.log("Before Created method is called");
});
onMounted(() => {
  console.log("Created method called")
})
</script>

<template>
  <main class="flex h-screen overflow-auto bg-foreground text-background">
    <p
      class="hidden md:flex mt-auto text-xs [writing-mode:vertical-lr] [text-orientation:upright]  leading-none tracking-tight ">
      rahulkandwal707@gmail.com</p>

    <div class="flex flex-col flex-1 p-10">
      <Navbar />
      <router-view />
    </div>
    <p
      class="hidden md:flex mt-auto text-xs [writing-mode:vertical-lr] [text-orientation:upright]  leading-none tracking-tight ">
      rahulkandwal707@gmail.com</p>
  </main>
</template>
