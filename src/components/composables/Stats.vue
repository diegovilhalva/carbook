<template>
  <section 
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto py-16 px-6" 
    ref="statsSection"
  >
    <div
      v-for="(item, index) in stats"
      :key="index"
      class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:scale-105"
    >
      <div 
        class="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white text-2xl shadow-md"
      >
        <component :is="item.icon" />
      </div>

      <h1 class="text-5xl font-extrabold text-gray-900">
        {{ item.count }}
      </h1>
      <p class="text-lg text-gray-600 font-medium text-center">
        {{ item.label }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

import { BsBriefcase, AnOutlinedCar, HiUserGroup, HiBuildingStorefront } from "@kalimahapps/vue-icons";

const stats = ref([
  { to: 10, label: "Anos no Mercado", count: 0, icon: BsBriefcase },
  { to: 1090, label: "Veículos", count: 0, icon: AnOutlinedCar },
  { to: 2590, label: "Clientes", count: 0, icon: HiUserGroup },
  { to: 12, label: "Lojas", count: 0, icon: HiBuildingStorefront },
]);

const statsSection = ref(null);

const startCounting = () => {
  stats.value.forEach((stat) => {
    let start = 0;
    const increment = stat.to / (2000 / 16);

    const interval = setInterval(() => {
      start += increment;
      if (start >= stat.to) {
        stat.count = stat.to;
        clearInterval(interval);
      } else {
        stat.count = Math.floor(start);
      }
    }, 16);
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        startCounting();
        observer.unobserve(statsSection.value);
      }
    },
    { threshold: 0.5 }
  );
  if (statsSection.value) {
    observer.observe(statsSection.value);
  }
});
</script>
