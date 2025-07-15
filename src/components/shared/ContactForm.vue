<template>
  <div class="relative bg-white min-h-screen grid grid-cols-2 overflow-hidden">
    <!-- Left image illustration -->
      <div class="flex-1 z-10 flex justify-center md:justify-start">
        <img src="@/assets/girl.svg" alt="Girl illustration" class="w-full " />
      </div>
 
    <div class="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <img src="@/assets/rectangle-down.svg" alt="Triangle" class="absolute top-0 w-32 mx-auto left-25 transform -translate-x-1/2" />
     
        <img src="@/assets/sidewall.svg" alt="Sidewall" class="absolute right-0 bottom-0 w-full hidden md:block" />
        
 
      <div class="flex-1 z-10 bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6">Send Us message</h2>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <input type="email" placeholder="Your Email*" v-model="form.email"
              class="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2" required />
          </div>
          <div>
            <input type="text" placeholder="Your Name*" v-model="form.name"
              class="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2" required />
          </div>
          <div>
            <input type="tel" placeholder="Phone Number*" v-model="form.phone"
              class="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2" required />
          </div>
          <div>
            <input type="text" placeholder="Subject" v-model="form.subject"
              class="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2" />
          </div>
          <div>
            <textarea placeholder="Your Message" v-model="form.message"
              class="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"></textarea>
          </div>
          <div class="flex items-center space-x-2">
            <input type="checkbox" v-model="form.agree" class="accent-blue-600" />
            <span class="text-sm text-gray-600">By sending this message, you confirm that you have read and agreed to our privacy policy.</span>
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started →
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  email: '',
  name: '',
  phone: '',
  subject: '',
  message: '',
  agree: false
})

const handleSubmit = () => {
  if (!form.agree) {
    alert('Please agree to the privacy policy.');
    return;
  }
  console.log('Form submitted:', { ...form });
  alert('Form submitted! (Check console for details)');
}
</script>

<style scoped>
/* Additional tweaks if needed */
</style>
