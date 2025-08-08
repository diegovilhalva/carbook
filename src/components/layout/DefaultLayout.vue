<template>
    <div class="min-h-screen flex flex-col relative">
        <Header />
        <main class="flex-grow">
            <router-view></router-view>
        </main>
        <Footer />
    </div>
</template>

<script>
import Footer from './Footer.vue';
import Header from './Header.vue';
export default {
    components: {
        Header,
        Footer
    }
}

</script>
