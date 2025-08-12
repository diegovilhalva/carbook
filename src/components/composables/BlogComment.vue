<template>
  <div class="flex items-start gap-4 p-4 border border-gray-200 rounded-lg shadow-sm mb-4">
    <!-- Avatar -->
    <img
      :src="getImage(comment.avatar || 'person_1.jpg')"
      alt="User Avatar"
      class="w-12 h-12 rounded-full object-cover"
    />

    <!-- Conteúdo -->
    <div class="flex-1">
      <h4 class="font-semibold text-gray-800">{{ comment.author }}</h4>
      
      <!-- Avaliação -->
      <div class="flex items-center text-yellow-400 text-lg">
        <AnFilledStar v-for="n in comment.rating" :key="'full'+n" />
        <AnOutlinedStar v-for="n in 5 - comment.rating" :key="'empty'+n" />
      </div>

      <p class="text-gray-600 mt-2">{{ comment.text }}</p>

      <!-- Botão resposta -->
      <button
        class="mt-3 px-3 py-1 rounded text-xs font-medium text-blue-500 hover:underline flex items-center gap-1"
      >
        <AnOutlinedComment /> Responder
      </button>
    </div>
  </div>
</template>

<script setup>
import { AnFilledStar, AnOutlinedStar, AnOutlinedComment } from "@kalimahapps/vue-icons";
defineProps({
  comment: Object,
});
const getImage = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};
</script>
