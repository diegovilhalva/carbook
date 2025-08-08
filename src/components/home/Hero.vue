<template>
    <section class="bg-cover relative h-screen" :style="{ backgroundImage: `url(${bgImage})` }">
        <div class="absolute inset-0 bg-black opacity-25"></div>
        <div class="relative flex items-center justify-center h-full text-center text-white px-4">
            <div class="w-full md:w-3/5 content-wrapper" :class="{ 'animate-in': isVisible }">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">
                    A forma mais rápida e simples de alugar um carro
                </h1>
                <p class="text-md md:text-xl mb-6">
                    Encontre o veículo ideal para sua viagem ou compromisso com praticidade, segurança e condições sob
                    medida para você.
                </p>
                <h2 class="text-2xl font-semibold">
                    Passos simples para alugar um carro
                </h2>
                <div class="mt-6">
                    <router-link to="/cars"
                        class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300">
                        Ver carros disponíveis
                    </router-link>
                </div>

            </div>
        </div>

    </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import bgImage from "../../assets/images/bg_1.jpg"
const isVisible = ref(false);

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true;
    }, 100)
})
</script>

<style>
 .content-wrapper {
    transform: translateY(80px);
    opacity: 0;
    transition: all 1s ease-out;
}

 .content-wrapper.animate-in {
    transform: translateY(0);
    opacity: 1;
}
</style>