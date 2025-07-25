<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { Sun, Moon, Logs } from 'lucide-vue-next'
// import your Button component
import Button from '@/components/ui/button.vue' // adjust path as needed

const links = ['home', 'projects', 'stack', 'experience', 'contact']

const isDark = ref(false)
const showResponsiveMenu = ref(false)
const navItems = ref([])
const navList = ref(null)
const activeIndex = ref(null)
const indicatorStyle = ref({})

// Refs inside v-for
onMounted(() => {
  navItems.value = Array.from(
    navList.value?.querySelectorAll('li') || []
  )
})

const setActive = async (index) => {
  activeIndex.value = index
  await nextTick()

  const li = navItems.value[index]
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
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

const handleToggleMenu = () => {
  showResponsiveMenu.value = !showResponsiveMenu.value
}
</script>

<template>
  <nav class="fixed top-0 left-0 flex justify-between items-center gap-6 w-full py-2 px-5 z-10 overflow-visible">
    <span class="hover:opacity-80 text-xl bg-primary-foreground text-primary px-4 rounded-full font-light">
      ЯK
    </span>

    <ul
      ref="navList"
      class="relative hidden md:flex w-fit rounded-full border border-muted/20 outline-offset bg-muted/5 outline-primary p-1"
      @mouseleave="activeIndex = null"
    >
      <div
        v-if="activeIndex !== null"
        class="absolute bg-primary rounded-full transition-all duration-300 ease-in-out z-0"
        :style="indicatorStyle"
      ></div>

      <li
        v-for="(link, index) in links"
        :key="link"
        class="relative z-10 block cursor-pointer text-xs uppercase text-primary-foreground"
        @mouseenter="setActive(index)"
      >
        <a :href="'#' + link" class="px-3 py-1.5 block relative">{{ link }}</a>
      </li>
    </ul>

    <div class="flex items-center gap-2">
      <Button variant="ghost" class="text-background" @click="handleUpdateTheme">
        <component :is="isDark ? Moon : Sun" class="w-5 h-5" />
      </Button>

      <div class="flex flex-col gap-4">
        <Button variant="ghost" class="text-background cursor-pointer" @click="handleToggleMenu">
          <Logs class="w-5 h-5" />
        </Button>

        <div v-if="showResponsiveMenu" class="absolute right-2 top-12 list-none">
          <ul class="flex flex-col bg-foreground text-background border py-4 rounded-md outline-1 outline-comment-grey gap-3 items-center">
            <li
              v-for="link in links"
              :key="link"
              class="w-full text-center"
            >
              <a :href="'#' + link" class="hover:opacity-80 w-full block px-4">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
