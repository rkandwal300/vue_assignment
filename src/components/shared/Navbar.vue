<script setup>
import { ref, nextTick } from 'vue'
import { Sun, Moon } from 'lucide-vue-next';

const links = ['home', 'projects', 'stack', 'experience', 'contact',]

const isDark = ref(false)
const navItems = ref([])
const navList = ref(null)
const activeIndex = ref(null)
const indicatorStyle = ref({})

const setActive = async (index) => {
    activeIndex.value = index
    await nextTick()

    const li = navItems.value[index]?.$el ?? navItems.value[index]
    const ul = navList.value

    if (li && ul) {
        indicatorStyle.value = {
            top: `${li.offsetTop}px`,
            left: `${li.offsetLeft}px`,
            width: `${li.offsetWidth}px`,
            height: `${li.offsetHeight}px`,
        }
    }
}
const handleUpdateTheme = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle('dark', isDark.value)
}
</script>


<template>
    <nav :class="[
        'fixed top-0 flex justify-between items-center gap-6 w-full py-2 px-5'
    ]">
        <span class="hover:opacity-80 text-xl bg-primary-foreground text-primary px-4 rounded-full font-light">ЯK</span>
        <ul ref="navList"
            class="relative hidden md:flex w-fit rounded-full border border-muted/20 outline-offset bg-muted/5 outline-primary p-1"
            @mouseleave="activeIndex = null">

            <div v-if="activeIndex !== null"
                class="absolute bg-primary rounded-full transition-all duration-300 ease-in-out z-0"
                :style="indicatorStyle"></div>


            <li v-for="(link, index) in links" :key="link" ref="navItems"
                class="relative z-10 block cursor-pointer text-xs uppercase text-primary-foreground"
                @mouseenter="setActive(index)">
                <a :href="'#' + link" class="px-3 py-1.5 block relative">
                    {{ link }}
                </a>
            </li>
        </ul>
        <Button variant="ghost" class="text-background" @click="handleUpdateTheme">
            <component :is="isDark ? Moon : Sun" class="w-5 h-5" />
        </Button>
    </nav>
</template>
