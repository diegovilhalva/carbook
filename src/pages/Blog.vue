<template>
  <BgContainer
    title="Leia Nossos Artigos"
    bgImage="bg_3.jpg"
    :links="[
      { text: 'Início', to: '/' },
      { text: 'Blog', to: '/blog' },
    ]"
  />

  <section
    class="flex flex-col items-center gap-16 p-4 py-10 md:py-20 max-w-7xl mx-auto"
  >
    <BlogCard
      v-for="blog in blogs"
      :key="blog.id"
      :title="blog.title"
      :author="`Por ${blog.author}`"
      :date="blog.date"
      :image="blog.image"
      :description="blog.description"
      :comments="blog.comments"
      :id="blog.id"
      class="w-full sm:w-5/6 lg:w-2/3 transition-transform transform hover:scale-[1.02] duration-300"
      :imageHeight="'h-[400px] md:h-[500px]'"
    />
  </section>
</template>

<script setup>
import BgContainer from "../components/composables/BgContainer.vue";
import BlogCard from "../components/cards/BlogCard.vue";
import { blogs } from "../data/blogsData";
</script>

<style scoped>
section {
  background: linear-gradient(to bottom, #f9fafb, #ffffff);
}
</style>
