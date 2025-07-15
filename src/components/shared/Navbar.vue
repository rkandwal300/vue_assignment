<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Button from '@/components/ui/button.vue';

const isGlass = ref(false);

const handleScroll = () => {
    isGlass.value = window.scrollY > window.innerHeight * 0.7;

    // Also toggle a class on the main tag
    const mainEl = document.getElementById('main');
    if (mainEl) {
        if (isGlass.value) {
            mainEl.classList.add('glass-active');
        } else {
            mainEl.classList.remove('glass-active');
        }
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div :class="[
        'w-full h-13 fixed top-17 bg-[#0E77FF] text-secondary z-20 px-10 flex justify-center items-center transition duration-300',
        // isGlass
        //     ? 'backdrop-blur-md bg-primary/60 shadow-md text-secondary-foreground'
        //     : 'bg-primary text-secondary'
    ]">
        <nav class="flex justify-between w-full items-center gap-10 mx-auto max-w-5xl">
            <span class="text-2xl">Logo</span>
            <ul class="flex text-lg justify-center items-center gap-10">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contact</a></li>
                <li><Button variant="secondary">Login</Button></li>
            </ul>
        </nav>
    </div>
</template>
