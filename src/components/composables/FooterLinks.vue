<template>
  <div>
    <h2 class="text-white text-xl font-semibold mb-4">{{ title }}</h2>
    <ul class="space-y-3 mt-4">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="text-gray-300 hover:text-green-500 transition-colors cursor-pointer"
      >
        <a
          v-if="typeof link === 'object'"
          :href="link.url"
        >
          {{ link.text }}
        </a>
        <span v-else>{{ link }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  links: {
    type: Array,
    required: true,
  },
});
</script>
