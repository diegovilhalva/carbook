<template>
  <div class="max-w-80 h-full mx-auto bg-white rounded-sm overflow-hidden shadow-md m">
    <img :src="getImage(image)" alt="" class="w-full  object-cover" />
    <div class="p-6 space-y-2">
      <h3 class="text-xl font-semibold text-gray-900 truncatr">{{ name }}</h3>
      <div class="flex justify-between items-center">
        <p class="text-md text-gray-400">{{ brand }}</p>
        <p class="text-lg text-green-600 font-semibold">
          {{ price }}
          <span class="text-gray-500 text-sm font-normal">/ diária</span>
        </p>

      </div>
      <div class="flex justify-between">
        <router-link :to="`/pricing`">
          <ButtonComponent text="Alugar" />
        </router-link>
        <router-link :to="`/car/${id}`">
          <ButtonComponent text="Mais detalhes" bgColor="bg-green-500" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "../composables/ButtonComponent.vue";
defineProps({
  id: Number,
  name: String,
  brand: String,
  price: String,
  image: String,
});

const getImage = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};
</script>

<style></style>