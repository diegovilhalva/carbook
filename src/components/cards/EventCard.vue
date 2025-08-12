<template>
    <div class="flex gap-2 items-center">
      <!-- Icon with Blue Circle -->
      <div class="flex justify-center items-center border border-gray-200 rounded-full w-16 md:w-20 h-16 md:h-20 mx-auto mt-4">
        <component :is="event.icon" class="text-blue-500 text-2xl" />
      </div>
  
      <!-- Event Content -->
      <div class="p-2 font-medium">
        <h2 class="text-sm text-gray-400 mt-2">{{ event.title }}</h2>
        <p class="text-sm text-gray-900">{{ event.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  const props = defineProps({
    event: Object, 
  });
  </script>
  