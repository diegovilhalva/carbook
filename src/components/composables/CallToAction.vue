<template>
  <div class="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
    <!-- Imagem de fundo -->
    <div class="absolute inset-0">
      <img
        src="../../assets/images/bg_3.jpg"
        alt="Carros e estrada ao entardecer"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <!-- Camada verde em diagonal -->
    <div
      class="absolute right-0 top-0 h-full w-full md:w-1/2 bg-gradient-to-r from-[#10b981] to-green-500 transform -skew-x-12 origin-right opacity-90"
    ></div>

    <!-- Conteúdo -->
    <div class="relative z-10 text-center md:text-left max-w-3xl px-6 md:px-12">
      <h2 class="text-2xl md:text-4xl font-bold text-white leading-tight drop-shadow-lg">
        Alguma dúvida ou sugestão?
      </h2>
      <p class="mt-4 text-white text-lg md:text-xl opacity-90 drop-shadow-sm">
        Fale com nossa equipe e receba atendimento rápido e personalizado.
      </p>

      <router-link to="/contact">
        <ButtonComponent
          text="Entre em contato"
          class="mt-6"
          bgColor="bg-white"
          textColor="text-green-600"
          hoverColor="bg-gray-100"
        />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "./ButtonComponent.vue";
</script>
