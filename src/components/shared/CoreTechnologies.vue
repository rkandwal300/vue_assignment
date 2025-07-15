<script setup lang="ts">
import { ref } from 'vue'
const tabs = ['Design', 'Development', 'Marketing']
const activeTab = ref('Development')


const techIcons = {
    Design: [
        'react.svg',
        'aws.svg',
        'cloud.svg',
        'vue.svg',
        'js.svg',
    ],
    Development: [
        'react.svg',
        'aws.svg',
        'cloud.svg',
        'js.svg',
        'symfony.svg',
        'redux.svg',
        'node.svg',
        'firebase.svg',
    ],
    Marketing: [
        'js.svg',
        'symfony.svg',
        'redux.svg',
        'node.svg',
        'firebase.svg',
    ]
}
</script>

<template>
    <section class="relative px-4 py-20 bg-[#f7faff] text-center overflow-hidden">
        <div class="flex items-center justify-center relative overflow-hidden pt-20">
            <img src="@/assets/CoreLeftTop.svg" alt="About Visual"
                class="w-full md:w-[120%] transform transition duration-500 md:scale-[1.4] md:-translate-x-[300px] translate-y-4 -translate-x-[250px]" />
        </div>


        <h2 class="text-3xl font-bold text-gray-900 mb-4">Core Technologies</h2>
        <p class="text-gray-600 max-w-xl mx-auto mb-8 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, is the turpis accusam congue
            euisque blandit.
        </p>

        <!-- Tabs -->
        <div class="inline-flex bg-white shadow-md rounded-full mb-12 overflow-hidden">
            <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
                class="px-6 py-2 text-sm font-medium transition-all duration-300" :class="{
                    'text-blue-600': activeTab === tab,
                    'text-gray-600': activeTab !== tab,
                    'bg-blue-50': activeTab === tab
                }">
                {{ tab }}
            </button>
        </div>

        <!-- Icons Grid -->
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center max-w-5xl mx-auto">
            <div v-for="icon in techIcons[activeTab]" :key="icon"
                class="w-20 h-20 flex items-center justify-center border border-blue-100 rounded-lg shadow-sm hover:scale-105 transition">
                <img :src="`@/assets/${icon}`" :alt="icon" class="w-10 h-10 object-contain" />
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Optional: triangle backgrounds if you want absolute decorations */
</style>
