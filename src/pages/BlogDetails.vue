<template>
  <BgContainer
    title="Blog"
    bgImage="bg_3.jpg"
    :links="[
      { text: 'Início', to: '/' },
      { text: 'Blogs', to: '/blog' },
    ]"
  />

  <div v-if="blog" class="flex justify-center px-4 py-10 md:py-20">
    <div class="w-full md:w-4/5 max-w-5xl">
      
      <!-- Título -->
      <h1 class="text-3xl md:text-5xl font-semibold text-gray-800 leading-tight">
        {{ blog.title }}
      </h1>

      <!-- Meta informações -->
      <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-4">
        <span class="flex items-center gap-1">
          <AnOutlinedCalendar class="text-blue-500" /> {{ blog.date }}
        </span>
        <span class="flex items-center gap-1">
          <AnOutlinedUser class="text-green-500" /> {{ blog.author }}
        </span>
        <span class="flex items-center gap-1">
          <AnOutlinedComment class="text-yellow-500" /> {{ blog.comments?.length || 0 }} Comentários
        </span>
      </div>

      <!-- Imagem -->
      <img 
        :src="getImage(blog.image)" 
        alt="" 
        class="w-full md:h-[600px] object-cover rounded-lg mt-6 shadow-md" 
      />

      <!-- Descrição -->
      <p class="text-gray-600 mt-6 leading-relaxed text-lg">
        {{ blog.description }}
      </p>

      <!-- Comentários -->
      <div class="mt-10">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Comentários</h2>
        <div v-if="blog.comments?.length">
          <BlogComment
            v-for="(comment, index) in blog.comments"
            :key="index"
            :comment="comment"
          />
        </div>
        <p v-else class="text-gray-400">
          Ainda não há comentários.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import BgContainer from "../components/composables/BgContainer.vue";
import BlogComment from "../components/composables/BlogComment.vue";
import { blogs } from "../data/blogsData";
import { AnOutlinedCalendar, AnOutlinedUser, AnOutlinedComment } from "@kalimahapps/vue-icons";

const route = useRoute();
const blog = ref(null);

const getImage = (imageName) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};

onMounted(() => {
  const blogId = Number(route.params.id);
  blog.value = blogs.find((b) => b.id === blogId) || {};
});
</script>
