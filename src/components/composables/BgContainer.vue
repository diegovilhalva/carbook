<template>
    <div
      :class="[
        'relative bg-cover md:bg-top flex items-end p-4 md:pl-36 h-[600px] text-white',
        height
      ]"
      :style="{ backgroundImage: `url(${getImage(bgImage)})` }"
    >
      <!-- Overlay (Optional) -->
      <div v-if="overlay" class="absolute inset-0" :class="overlay"></div>
  
      <!-- Content -->
      <div class="z-10 pb-10">
        <!-- Dynamic Router Links -->
        <div class="mt-4 space-x-4 flex items-center gap-2 text-sm text-gray-300 uppercase medium">
          <router-link
            v-for="(link, index) in links"
            :key="index"
            :to="link.to"
            class="hover:text-blue-500 transition-colors flex items-center"
          >
            {{ link.text }}
            <FlIOsArrowRtl />
          </router-link>
        </div>
  
        <h1 class="text-4xl font-semibold mt-3">{{ title }}</h1>
      </div>
    </div>
  </template>
  
  <script setup>
  import { FlIOsArrowRtl } from '@kalimahapps/vue-icons';
  
  defineProps({
  title: String, 
  bgImage: String, 
  height: {
    type: String,
    default: 'h-[600px]' 
  },
  overlay: {
    type: String,
    default: 'bg-black/50' 
  },
  links: {
    type: Array,
    default: () => [
      { text: 'Link 1', to: '/link1' },
      { text: 'Link 2', to: '/link2' }
    ]
  }
  });
  
  const getImage = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
  };
  </script>