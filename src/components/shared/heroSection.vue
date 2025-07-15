<script setup>
import dashboard from '@/assets/Mask Group 4.svg'

import { ChevronsRight } from 'lucide-vue-next';
import Button from '@/components/ui/button.vue';
</script>

<template>
    <section id="hero-section" class="h-screen w-full bg-no-repeat object-right object-cover flex justify-center items-center px-10" :style="{
        backgroundImage: `url(${dashboard})`,
        backgroundOrigin: 'padding-box',
        backgroundSize: 'cover',
    }">
        <div class="max-w-6xl p-2 w-full">

            <div class="flex flex-col gap-6 max-w-md w-full">
                <h1 class="text-white font-bold text-4xl leading-tight">
                    Lorem Ipsum is simply dummy text of the printing and typesetting.
                </h1>


                <p class="text-blue-200 text-base max-w-full">
                    Our products are fully custom-made, built with the latest technologies and cloud-architectures.
                </p>

                <Button size="lg" variant="secondary" class="rounded-full w-50 h-12">
                    <span> Get Started </span>
                    <ChevronsRight :size="20" />
                </Button>
            </div>
        </div>

    </section>

</template>
