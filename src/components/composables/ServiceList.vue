<template>
  <div>
    <SectionHeading title="Serviços" description="O que oferecemos a você" />

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 md:py-20 max-w-7xl mx-auto px-4">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
      >
        <!-- Ícone -->
        <div
          class="bg-green-100 w-20 h-20 md:w-24 md:h-24 rounded-full flex justify-center items-center mb-4 transition-transform duration-300 hover:scale-110"
        >
          <component :is="service.icon" class="text-green-600 text-3xl md:text-4xl" />
        </div>

        <!-- Texto -->
        <h2 class="text-lg font-semibold text-gray-800 mt-2">{{ service.title }}</h2>
        <p class="text-sm text-gray-500 mt-2 leading-relaxed">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SectionHeading from "./SectionHeading.vue";
import {
  McCarLine,
  ReKeyLine,
  ReShieldCheckLine,
  McMapPinLine,
  McGasStationLine,
  BxSupport
} from "@kalimahapps/vue-icons";

const services = ref([
  {
    title: "Aluguel de Carros",
    description: "Encontre o veículo perfeito para qualquer ocasião, de econômicos a modelos de luxo.",
    icon: McCarLine
  },
  {
    title: "Retirada e Entrega",
    description: "Receba ou devolva o carro no local que for mais conveniente para você.",
    icon: McMapPinLine
  },
  {
    title: "Proteção Completa",
    description: "Seguro e assistência 24h para que sua viagem seja sem preocupações.",
    icon: ReShieldCheckLine
  },
  {
    title: "Combustível Incluso",
    description: "Planos com combustível incluso para mais comodidade e praticidade.",
    icon: McGasStationLine
  },
  {
    title: "Chave na Mão",
    description: "Processo rápido de retirada, sem burocracia desnecessária.",
    icon: ReKeyLine
  },
  {
    title: "Suporte Dedicado",
    description: "Nossa equipe está sempre pronta para ajudar antes, durante e depois da sua locação.",
    icon: BxSupport
  }
]);
</script>
