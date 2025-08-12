<template>
  <BgContainer
    title="Contato"
    subtitle="Entre em contato com nossa equipe"
    bgImage="bg_3.jpg"
    :links="[
      { text: 'Início', to: '/' },
      { text: 'Contato', to: '/contact' },
    ]"
  />

  <div class="mx-auto p-8 max-w-6xl space-y-12">
    <div class="flex flex-col-reverse md:flex-row gap-10 md:gap-8 justify-between">
      
      <!-- Detalhes de Contato -->
      <div class="space-y-6 md:w-1/3">
        <div
          v-for="(contact, index) in contacts"
          :key="index"
          class="flex items-start gap-4 border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow"
        >
          <component :is="contact.icon" class="text-blue-500 text-3xl" />
          <div>
            <p class="text-gray-500 text-sm mb-1">{{ contact.label }}</p>
            <p class="font-medium text-base">
              <a
                v-if="contact.href"
                :href="contact.href"
                target="_blank"
                class="hover:underline"
              >
                {{ contact.value }}
              </a>
              <span v-else>{{ contact.value }}</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Formulário -->
      <div class="bg-white p-6 shadow-lg rounded-lg md:w-3/5 border border-gray-100">
        <form @submit.prevent="submitForm" class="space-y-4">
          
          <div>
            <label class="block text-gray-700 font-medium">Nome</label>
            <input
              type="text"
              v-model="form.name"
              class="w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400"
              placeholder="Seu nome completo"
              required
            />
          </div>

          <div>
            <label class="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              v-model="form.email"
              class="w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label class="block text-gray-700 font-medium">Mensagem</label>
            <textarea
              v-model="form.message"
              rows="4"
              class="w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400"
              placeholder="Digite sua mensagem..."
              required
            ></textarea>
          </div>

          <ButtonComponent
            :disabled="loading"
            type="submit"
            :text="loading ? 'Enviando...' : 'Enviar Mensagem'"
            bgColor="bg-blue-500"
            textColor="text-white"
            hoverColor="bg-blue-700"
          />
        </form>
      </div>
    </div>

    <!-- Mapa -->
    <div>
      <iframe
        src="https://maps.google.com/maps?q=sao+paulo&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        style="border:0"
        allowfullscreen
        class="w-full h-[350px] md:h-[500px] rounded-lg shadow-md"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BgContainer from "../components/composables/BgContainer.vue";
import ButtonComponent from "../components/composables/ButtonComponent.vue";
import { AkLocation, AnOutlinedMail, BsTelephoneFill } from "@kalimahapps/vue-icons";

const loading = ref(false);

const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  loading.value = true;
  setTimeout(() => {
    alert("Mensagem enviada com sucesso!");
    form.value = { name: "", email: "", message: "" };
    loading.value = false;
  }, 1200);
};

const contacts = ref([
  {
    label: "Endereço:",
    value: "Rua das Palmeiras, 123, São Paulo, SP, Brasil",
    icon: AkLocation,
    href: "https://maps.google.com?q=Rua+das+Palmeiras+123+São+Paulo",
  },
  { 
    label: "Email:", 
    value: "contato@carbook.com.br", 
    icon: AnOutlinedMail,
    href: "mailto:contato@carbook.com.br" 
  },
  { 
    label: "Telefone:", 
    value: "+55 (11) 98765-4321", 
    icon: BsTelephoneFill,
    href: "tel:+5511987654321" 
  },
]);
</script>
