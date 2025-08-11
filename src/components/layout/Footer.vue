<template>
  <footer class="bg-black text-white p-6 md:p-20">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row gap-10 justify-between">
        
        <!-- Logo e descrição -->
        <div class="md:w-1/5 space-y-6">
          <h1 class="uppercase text-2xl font-bold cursor-pointer">
            <span class="text-white">Car</span>
            <span class="text-green-500">Book</span>
          </h1>
          <p class="text-gray-300 text-base">
            Sua maneira mais fácil de alugar carros
          </p>
          <div class="flex items-center gap-6 text-3xl">
            <a href="#" aria-label="Twitter" class="hover:text-green-500 transition-colors">
              <FaBandsXTwitter />
            </a>
            <a href="#" aria-label="Facebook" class="hover:text-green-500 transition-colors">
              <CgFacebook />
            </a>
            <a href="#" aria-label="Instagram" class="hover:text-green-500 transition-colors">
              <BsInstagram />
            </a>
          </div>
        </div>

        <!-- Links -->
        <FooterLinks :title="'Informações'" :links="informationLinks" />
        <FooterLinks :title="'Suporte ao Consumidor'" :links="customerSupportLinks" />

        <!-- Contato -->
        <div class="md:w-1/5">
          <h2 class="text-xl font-semibold mb-4">Fale Conosco</h2>
          <div class="flex flex-col space-y-6">
            <div
              v-for="(info, index) in contactInfo"
              :key="index"
              class="flex items-center gap-4"
            >
              <component :is="info.icon" class="text-green-500 text-xl flex-shrink-0" />
              <p class="text-gray-300 text-md">{{ info.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <p class="text-gray-400 text-center mt-16 text-sm">
        © 2025 Feito com <span aria-label="coração" role="img">❤️</span> por Diego Vilhalva
      </p>
    </div>
  </footer>
</template>

<script setup>
import FooterLinks from '../composables/FooterLinks.vue'
import { AkLocation, AnOutlinedMail, BsTelephoneFill, BsInstagram, CgFacebook, FaBandsXTwitter } from "@kalimahapps/vue-icons";

const informationLinks = [
  { text: "Sobre Nós", url: "/about" },
  { text: "Serviços", url: "/services" },
  { text: "Termos e Condições", url: "/terms" },
  { text: "Melhores Preços", url: "/best-price" },
  { text: "Garantia", url: "/guarantee" },
  { text: "Política de Privacidade", url: "/privacy-policy" },
];

const customerSupportLinks = [
  { text: "FAQ", url: "/faq" },
  { text: "Opções de Pagamento", url: "/payment-options" },
  { text: "Dicas de Reserva", url: "/booking-tips" },
  { text: "Como Funciona", url: "/how-it-works" },
  { text: "Fale Conosco", url: "/contact" },
];

const contactInfo = [
  { icon: AkLocation, text: "Rua das Palmeiras, 123, São Paulo, SP, Brasil" },
  { icon: BsTelephoneFill, text: "+55 (11) 98765-4321" },
  { icon: AnOutlinedMail, text: "contato@carbook.com.br" },
];
</script>
