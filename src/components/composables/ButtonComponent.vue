<template>
  <button
    :class="`mt-4 px-4 py-3 rounded min-w-32 text-sm font-medium cursor-pointer ${bgColor} ${textColor} hover:${hoverColor}`"
    :style="{ width: width }"
  >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: { type: String, default: "Click Me" },
  width: { type: String, default: "auto" },
  bgColor: { type: String, default: "bg-blue-500" },
  textColor: { type: String, default: "text-white" },
  hoverColor: { type: String, default: "bg-blue-600" },
});
</script>

<style></style>