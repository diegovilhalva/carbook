<template>
  <div 
    class="flex flex-col items-center bg-white shadow-md hover:shadow-xl transition-shadow rounded-lg p-6 h-full text-center"
  >
    <img 
      :src="getImage(image)" 
      :alt="`Foto de ${name}`" 
      class="w-20 h-20 rounded-full object-cover border-4 border-green-500 shadow-md mb-4"
    > 

    <p class="text-gray-600 italic leading-relaxed mb-6 line-clamp-4">
      "{{ comment }}"
    </p>

    <div>
      <h2 class="text-lg font-bold text-gray-800">{{ name }}</h2>
      <p class="text-sm text-green-600 font-medium">{{ position }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  position: String,
  image: String,
  comment: String
})

const getImage = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href
}
</script>
