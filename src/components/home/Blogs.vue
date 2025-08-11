<template>
  <div class="bg-gray-50">
    <SectionHeading title="Postagens Recentes" description="Blog" />

    <section class="max-w-6xl mx-auto py-10 md:py-20 px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <BlogCard 
        v-for="(blog, index) in blogs"
        :key="index"
        :id="blog.id"
        :date="blog.date"
        :title="blog.title"
        :image="blog.image"
        :author="blog.author"
        :description="blog.description"
        :comments="blog.comments"
      />
    </section>
  </div>
</template>

<script setup>
import SectionHeading from '../composables/SectionHeading.vue';
import { blogs } from '../../data/blogsData';
import BlogCard from '../cards/BlogCard.vue';
</script>
