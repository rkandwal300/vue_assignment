<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const isDisabled = ref(true)

onMounted(() => {
  email.value = 'john.doe@example.com'
  password.value = 'Test@1234'
})

const login = () => {
  router.push('/dashboard')
}
</script>

<template>
  <section class="h-screen w-screen flex items-center justify-center bg-white pt-20">
    <div class="grid grid-cols-1 md:grid-cols-2 w-full h-full">
       
      <!-- Left image -->
      <div class="hidden md:flex items-center justify-center w-full h-full">
        <img src="@/assets/about_left.svg" alt="background"
          class="w-full h-full object-cover translate-y-10 -translate-x-[200px] rotate-[-8deg]" />
      </div>

      <!-- Login form -->
      <div class="w-full max-w-md flex flex-col justify-center px-8 space-y-6">
        <h2 class="text-2xl font-bold">Login to Access Dashboard</h2>
        
        <div class="space-y-4">
          <div>
            <label class="block mb-1 font-semibold">Email<span class="text-red-500">*</span></label>
            <input 
              type="email" 
              v-model="email" 
              :disabled="isDisabled"
              class="w-full border border-gray-400 px-4 py-2 rounded focus:outline-none transition 
                     disabled:bg-white disabled:text-black disabled:border-gray-400"
            />
          </div>
          <div>
            <label class="block mb-1 font-semibold">Password<span class="text-red-500">*</span></label>
            <input 
              type="password" 
              v-model="password" 
              :disabled="isDisabled"
              class="w-full border border-gray-400 px-4 py-2 rounded focus:outline-none transition 
                     disabled:bg-white disabled:text-black disabled:border-gray-400"
            />
          </div>
        </div>

        <button 
          @click="login"
          class="mt-6 border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition flex items-center justify-center gap-2"
        >
          Login →
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
img {
  transform: rotate(-8deg);
}
</style>
