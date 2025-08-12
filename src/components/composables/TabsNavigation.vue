<template>
  <div>
    <!-- Tabs Navigation -->
    <div class="tabs flex border-b border-gray-300 my-6">
      <button
        class="tab-button flex-1 py-2 px-4 text-center cursor-pointer border-b-2"
        :class="{
          'border-blue-500 text-blue-500 font-bold': activeTab === 'features',
          'border-transparent text-gray-500': activeTab !== 'features',
        }"
        @click="setActiveTab('features')"
      >
        Características
      </button>

      <button
        class="tab-button flex-1 py-2 px-4 text-center cursor-pointer border-b-2"
        :class="{
          'border-blue-500 text-blue-500 font-bold':
            activeTab === 'description',
          'border-transparent text-gray-500': activeTab !== 'description',
        }"
        @click="setActiveTab('description')"
      >
        Descrição
      </button>

      <button
        class="tab-button flex-1 py-2 px-4 text-center cursor-pointer border-b-2"
        :class="{
          'border-blue-500 text-blue-500 font-bold': activeTab === 'review',
          'border-transparent text-gray-500': activeTab !== 'review',
        }"
        @click="setActiveTab('review')"
      >
        Observações
      </button>
    </div>

    <!-- Tabs Content -->
    <div v-if="car" class="tab-content mt-4">
      <div v-if="activeTab === 'features'">
        <ul>
          <li
            v-for="(value, feature) in car.features"
            :key="feature"
            class="flex items-center gap-4 mb-2"
          >
            <span v-if="value" class="text-green-500"><AkCheck /></span>
            <span v-else class="text-red-500"><SuCross /></span>
            <span class="font-light text-gray-400 w-32">{{ feature }}</span>
          </li>
        </ul>
      </div>

      <div v-if="activeTab === 'description'">
        <p class="text-gray-400">{{ car.description }}</p>
      </div>

      <div v-if="activeTab === 'review'">
        <p class="text-gray-400">{{ car.review }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { cars } from "../../data/carsData"; 
import { AkCheck } from "@kalimahapps/vue-icons";
import { SuCross } from "@kalimahapps/vue-icons";

const car = ref(null); 
const activeTab = ref("features");


const setActiveTab = (tab) => {
  activeTab.value = tab;
};
const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  },
   cars: {
    type: Array,
    required: true
  }
});

onMounted(() => {
  car.value = props.cars.find((c) => c.id === Number(props.id)) || {};
});

</script>

<style scoped>
.tab-button {
  transition: border-color 0.3s, color 0.3s;
}
.tab-content {
  padding: 1rem;
}
</style>