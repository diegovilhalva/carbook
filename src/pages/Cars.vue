<template>
  <BgContainer
    title="Carros"
    bgImage="bg_3.jpg"
    :links="[
      { text: 'Início', to: '/' },
      { text: 'Carros', to: '/cars' },
    ]"
  />
   <div class="flex justify-center w-full my-20">
    <div class="grid grid-cols-1 md:grid-cols-3 w-4/5 gap-10">
        <CarCard
            v-for="(car, index) in cars"
            :key="index"
            :id="car.id"
            :name="car.name"
            :price="car.price"
            :image="car.image"
            :brand="car.brand"
        />
    </div>
  </div>
</template>

<script setup>
import CarCard from '../components/cards/CarCard.vue';
import BgContainer from '../components/composables/BgContainer.vue';
import { cars } from '../data/carsData';

</script>
