<template>
  <div>
    <!-- Seção de cabeçalho -->
    <BgContainer
      title="Sobre"
      bgImage="bg_3.jpg"
      :links="[
        { text: 'Início', to: '/' },
        { text: 'Sobre', to: '/about' },
      ]"
    />

    <!-- Conteúdo principal -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <!-- Imagem ilustrativa -->
        <div>
          <img
            src="../assets/images/about_us.jpg"
            alt="Equipe Carbook"
            class="rounded-xl shadow-lg"
          />
        </div>

        <!-- Texto da história -->
        <div>
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            Nossa História
          </h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            Fundada em 2015, a <strong>Carbook</strong> nasceu com o objetivo de
            transformar a forma como as pessoas alugam veículos. Ao longo de
            10 anos, crescemos de uma pequena operação local para uma
            plataforma reconhecida nacionalmente, oferecendo desde carros
            econômicos até modelos de luxo.
          </p>
          <p class="text-gray-600 leading-relaxed mb-4">
            Nossa missão sempre foi garantir transparência, preços justos e um
            atendimento excepcional. Com tecnologia de ponta, possibilitamos
            reservas rápidas e seguras, conectando motoristas às melhores
            ofertas do mercado.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Hoje, a Carbook conta com milhares de clientes satisfeitos e parcerias
            estratégicas em todo o país, mantendo o compromisso de inovar e
            oferecer experiências únicas na locação de veículos.
          </p>
        </div>
      </div>
    </section>

    <!-- Missão, Visão e Valores -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-8 text-center">
        <div class="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">Missão</h3>
          <p class="text-gray-600">
            Oferecer soluções de mobilidade acessíveis, seguras e eficientes,
            proporcionando liberdade e praticidade para todos os nossos clientes.
          </p>
        </div>
        <div class="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">Visão</h3>
          <p class="text-gray-600">
            Ser a principal plataforma de locação de veículos no Brasil, reconhecida
            pela inovação e excelência no atendimento.
          </p>
        </div>
        <div class="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">Valores</h3>
          <p class="text-gray-600">
            Transparência, inovação, compromisso com o cliente, sustentabilidade
            e responsabilidade social.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BgContainer from '../components/composables/BgContainer.vue';
</script>
