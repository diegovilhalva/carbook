<template>
  <SectionHeading title="Veículos em destaque" description="Nossos melhores Carros" />
   <div class="w-full h-full py-10 md:py-20 px-4 md:px-0">
      <swiper
      :modules="[Autoplay,Navigation]"
      :space-between="15"
      navigation
      loop
      :autoplay="{ delay: 6000, disableOnInteraction: false }"
      :breakpoints="{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
      
      class="max-w-7xl mx-auto w-full drop-shadow-2xl">
       <swiper-slide v-for="(car, index) in cars" :key="index">
        <CarCard  :id="car.id"
          :name="car.name"
          :brand="car.brand"
          :price="car.price"
          :image="car.image" />
       </swiper-slide>
    </swiper>
    
    
   </div>
</template>

<script setup>

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Autoplay,Navigation } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { cars } from '../../data/carsData';
import SectionHeading from '../composables/SectionHeading.vue';
import CarCard from "../cards/CarCard.vue";

</script>
<style>
.swiper-button-next,
.swiper-button-prev {
  color:#22c55e;
  filter: drop-shadow(0 0 2px rgba(16, 185, 129, 0.7));
  transition: color 0.3s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  color:  #16a34a; 
}

.swiper-button-next,
.swiper-button-prev {
  width: 2.5rem;
  height: 2.5rem;
}

.swiper-button-next {
  right: 0px;
}

.swiper-button-prev {
  left: 0px;
}

</style>