<script setup>
import leftSide from '@/assets/about_left.svg'
</script>

<template>

  <section class="grid relative grid-cols-1 min-h[700px] lg:grid-cols-2 h-full md:max-h-[900px] overflow-hidden">
    <div class="flex items-center justify-center relative overflow-hidden pt-20">
      <img :src="leftSide" alt="About Visual"
        class="w-full md:w-[120%] transform transition duration-500 md:scale-[1.4] md:-translate-x-[300px] translate-y-4 -translate-x-[250px]" />
    </div>

    <div class="w-full h-full  relative z-10 px-6 lg:px-12 flex flex-col justify-center">
      <img src="@/assets/Group 35650.svg" alt="Dots Decoration"
        class="absolute -bottom-56 right-0 md:scale-[0.5] translate-x-[250px]" />
      <img src="@/assets/Group 35698.svg" alt="Triangle Decoration"
        class="absolute top-0 right-0 w-64 translate-x-[30px]" />

      <div class="max-w-md">
        <div class="flex items-center gap-2 mb-2">
          <img src="@/assets/Group 35650.svg" alt="Arrow" class="w-4" />
          <span class="text-blue-600 font-semibold text-sm">ABOUT US</span>
        </div>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Great Digital Agency</h2>
        <p class="text-gray-700 mb-6">
          Our products are fully custom-made, built with the latest technologies and cloud-architectures.
        </p>
        <p class="text-gray-600 mb-6 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue.
          Quisque blandit dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
          egestas.
        </p>
        <button
          class="bg-transparent border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition">
          Get Started →
        </button>
      </div>
    </div>
  </section>
</template>
