<template>
  <div class="bg-gray-50">
    <SectionHeading 
      title="Clientes Satisfeitos" 
      description="O que nossos clientes dizem sobre a Carbook" 
    />

    <section class="py-10 md:py-20 px-4">
      <swiper
        :modules="[Autoplay]"
        :space-between="30"
        loop
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }"
        class="w-full max-w-6xl mx-auto"
      >
        <swiper-slide 
          v-for="(testimony, index) in testimonys" 
          :key="index"
        >
          <TestimonialCard 
            :name="testimony.name" 
            :position="testimony.position" 
            :image="testimony.image"
            :comment="testimony.comment" 
          />
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";

import SectionHeading from '../composables/SectionHeading.vue';
import { testimonys } from "../../data/testimonyData";
import TestimonialCard from "../cards/TestimonialCard.vue";
</script>
