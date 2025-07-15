<script setup>

import Button from '@/components/ui/button.vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()



const handleButtonClick = () => {
    if (route.path === '/dashboard') {
        router.push('/')
    } else {
        router.push('/login')
    }
}

</script>

<template>
    <div :class="[
        'w-full h-13 fixed top-12 bg-[#0E77FF] text-secondary z-20 px-10 flex justify-center items-center transition duration-300',
    ]">
        <nav class="flex justify-between w-full items-center gap-10 mx-auto max-w-5xl">
            <span class="text-2xl">Logo</span>
            <ul class="flex text-lg justify-center items-center gap-10">
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Case Studies</a></li>
                <li><a href="/">Testimonials</a></li>
                <li><a href="/">Contact</a></li>
                <li><Button variant="secondary" @click="handleButtonClick"> {{ route.path === '/dashboard' ? 'Logout' :
                        'Login' }}</Button></li>
            </ul>
        </nav>
    </div>
</template>
