<template>
  <section class="bg-[#10b981] w-full max-md:pb-10">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center h-full md:h-screen px-4 md:px-8">
      
      <!-- Imagem -->
      <div class="flex justify-center md:justify-end">
        <img
          src="../../assets/images/about.jpg"
          alt="Equipe da Carbook trabalhando para oferecer o melhor serviço de aluguel de carros"
          class="max-w-full md:max-w-lg lg:max-w-xl h-auto object-cover rounded shadow-lg"
        />
      </div>

      <!-- Texto -->
      <div class="text-white space-y-6 max-w-lg">
        <div>
          <h2 class="text-sm font-semibold mb-2 uppercase tracking-wide opacity-80">
            A Empresa
          </h2>
          <h1 class="text-3xl md:text-5xl font-bold leading-tight">
            Nós somos a Carbook
          </h1>
        </div>

        <p class="text-base leading-relaxed">
          Na <strong>Carbook</strong>, transformamos a experiência de alugar um carro em algo simples, rápido e seguro. 
          Oferecemos uma frota moderna, com veículos para todos os estilos e necessidades — desde carros econômicos 
          até modelos de luxo — sempre revisados e prontos para sua viagem.
        </p>

        <p class="text-base leading-relaxed">
          Nossa missão é proporcionar liberdade e comodidade, seja para viagens de negócios, férias em família 
          ou aventuras de fim de semana. Com atendimento ágil e transparente, garantimos que você tenha 
          mais tempo para aproveitar o que realmente importa.
        </p>

        <router-link to="/cars">
          <ButtonComponent 
            text="Ver carros" 
            bgColor="bg-white" 
            textColor="text-green-600" 
            hoverColor="bg-gray-100"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonComponent from "./ButtonComponent.vue";
</script>
