<script setup>
import Navbar from './components/shared/Navbar.vue'; 

</script>

<template>
  <main class="h-screen overflow-auto">
  <Navbar />
    <router-view />
  </main>
</template>
