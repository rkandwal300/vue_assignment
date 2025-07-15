<template>
  <section class=" relative bg-[#F8FAFF] py-16 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-10 pb-15">
    <!-- Left Section -->
    <div class="max-w-lg">
      <div class="flex items-center gap-2 mb-4">
        <img src="@/assets/bluearrow.svg" alt="arrow" class="w-4 h-4" />
        <h4 class="text-[#0E77FF] font-semibold">OUR SERVICES</h4>
      </div>
      <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
        Transforming your ideas<br />into Reality
      </h2>

      <!-- Tags -->
      <div class="flex flex-wrap gap-4">
        <span class="bg-[#E5F0FF] text-[#3B82F6] font-semibold px-4 py-2 rounded-lg text-sm">Web Development</span>
        <span class="bg-[#E5F0FF] text-[#3B82F6] font-semibold px-4 py-2 rounded-lg text-sm">Mobile Development</span>
        <span class="bg-[#0E77FF] text-white font-semibold px-4 py-2 rounded-lg text-sm">UI/UX Designing</span>
        <span class="bg-[#E5F0FF] text-[#3B82F6] font-semibold px-4 py-2 rounded-lg text-sm">Branding</span>
        <span class="bg-[#E5F0FF] text-[#3B82F6] font-semibold px-4 py-2 rounded-lg text-sm">Cloud Technology</span>
      </div>
    </div>

    <!-- Right Section -->
    <div class="relative bg-white shadow-xl rounded-xl p-8 w-full max-w-xl z-10">
      <div class="flex items-center gap-4 mb-4">
        <img src="@/assets/uiux.svg" alt="UI/UX" class="w-12 h-12" />
        <h3 class="text-2xl font-extrabold text-gray-800">UI/UX Designing</h3>
      </div>
      <p class="text-gray-600 text-sm mb-6">
        Lorem ipsum dolor sit amet, conse ctetur <span class="text-[#0E77FF]">adipi scing elit.</span> Aliq uam ex odio, is the turpis accu mson congue euisque <span class="text-[#0E77FF]">blandit dui Pelle</span> ntesque habitant.
      </p>

      <ul class="space-y-3 text-sm text-gray-700">
        <li class="flex items-start gap-2">
          <span class="text-green-500">✔</span>
          <span>Lorem ipsum dolor sit amet, conse <span class="text-[#0E77FF]">ctetur adipi scing elit.</span></span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500">✔</span>
          <span>Lorem ipsum dolor sit amet,</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500">✔</span>
          <span>conse ctetur adipi scing elit.</span>
        </li>
        <li class="flex items-start gap-2">
          <span class="text-green-500">✔</span>
          <span>Lorem ipsum dolor sit amet, conse <span class="text-[#0E77FF]">ctetur</span></span>
        </li>
      </ul>
    </div>

    <!-- Right Blue Background -->
    <div class="hidden md:block absolute right-0 top-0 h-full w-1/2 bg-[#0E77FF] -z-10"></div>
  </section>
</template>

<script setup>
// No script logic required unless you add interactivity
</script>

<style scoped>
/* Optional: Better shadows or custom effects */
</style>
