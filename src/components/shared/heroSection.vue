<script setup>
import profile from '@/assets/images/profile.png'
import dashboard from '@/assets/Mask Group 4.svg'
import { ChevronsRight } from 'lucide-vue-next';
import Button from '@/components/ui/button.vue';
</script>

<template>
    <section id="hero-section"
        class="md:text-5xl sm:text-4xl xs:text-2xl xxs:text-xl font-bold flex flex-col justify-center items-center gap-2 leading-[84px] text-nowrap text-comment-grey w-full">
        <h1 class="flex items-center lg:gap-6 sm:gap-4 "
            style="opacity: 1; will-change: auto; transform: none;">I’m<span class="gradient_hero">Rahul Kandwal</span>
            <div :style="{ backgroundImage: `url(${profile})` }"
                class="size-20 border-4 xs:border-2 object-top border-background rounded-full bg-background  min-w-[104px] bg-center bg-cover relative overflow-hidden lg:size-14 lg:min-w-[80px] sm:size-12 sm:min-w-16 xs:size-7 xs:min-w-11 scale-75 sm:scale-100">
            </div>
            <span>,</span>
        </h1>
    </section>

</template>
