<template>
    <header :class="headerClass"
        class="flex justify-center px-6 z-50 fixed w-full top-0 p-2 bg-white drop-shadow-sm  transition-all duration-300">
        <div class="flex justify-between items-center w-full md:w-5/6 md:relative">
            <Logo />            
            <nav :class="{ 'scrolled-nav': isScrolled }" class="space-x-6 hidden md:flex">
                <router-link v-for="link in links" :key="link.path" :to="link.path"
                    :class="{ 'active-link': route.path === link.path }" class="cursor-pointer">
                    {{ link.name }}
                </router-link>
            </nav>
            <div class="flex md:hidden">
                <button @click="toggleMenu" class="text-gray-800 focus:outline-none" aria-label="Toggle mobile menu">
                    <FaBarsStaggered />
                </button>
                <div v-if="menuVisible"
                    class="absolute top-16 left-0 bg-white shadow-lg border-t border-gray-200 w-full p-4 flex flex-col space-y-6">
                    <router-link v-for="link in links" :key="link.path" :to="link.path"
                        :class="{ 'active-link': route.path === link.path }"
                        class="hover:text-green-500 transition-colors" @click="closeMenu">{{ link.name }}
                    </router-link>
                </div>
            </div>
            
        </div>
    </header>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Logo from '../composables/Logo.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { computed } from 'vue';
import { FaBarsStaggered } from "@kalimahapps/vue-icons";
const links = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/about" },
    { name: "Serviços", path: "/services" },
    { name: "Planos", path: "/pricing" },
    { name: "Carros", path: "/cars" },
    { name: "Blog", path: "/blog" },
    { name: "Contato", path: "/contact" },
];

const route = useRoute()

const isScrolled = ref(false)
const menuVisible = ref(false)

const toggleMenu = () => {
    menuVisible.value = !menuVisible.value
}




const closeMenu = () => {
    menuVisible.value = false
}

const headerClass = computed(() => ({
    "sm:bg-transparent": !isScrolled.value,
    "sm:bg-white": isScrolled.value,
    "shadow-md": isScrolled.value,
    "p-4": true,
    "sm:py-10": !isScrolled.value,
}));

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});

</script>

<style>
nav a {
  position: relative;
}

nav a.active-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  height: 2px;
  width: 100%;
  background-color: #10b981;
  transform: scaleX(1);
  transition: transform 0.3s ease;
}

nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  height: 2px;
  width: 100%;
  background-color: #10b981;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

nav a:hover::after {
  transform: scaleX(1);
}
nav.scrolled-nav a {
  color: black !important;
}
</style>