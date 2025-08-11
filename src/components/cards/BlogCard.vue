<template>
  <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img
      :src="getImage(image)"
      alt="Imagem do post"
      class="object-cover w-full h-56"
    />

    <div class="p-5 space-y-3">
      <p class="text-sm text-green-500 font-medium">
        {{ date }} • {{ author }} • {{ comments?.length || 0 }} comentários
      </p>

      <h2 class="text-xl font-semibold text-gray-800 hover:text-green-500 transition-colors duration-200">
        {{ title }}
      </h2>

      <p class="text-gray-500 text-sm line-clamp-3">
        {{ description }}
      </p>

      <router-link :to="`/blog/${id}`">
        <ButtonComponent text="Ler Artigo" class="mt-3" />
      </router-link>
    </div>
  </article>
</template>

<script setup>
import ButtonComponent from "../composables/ButtonComponent.vue";

defineProps({
  id: Number,
  title: String,
  author: String,
  comments: Array, 
  date: String,
  description: String,
  image: String,
});

const getImage = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};
</script>
