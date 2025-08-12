<template>
  <div>
    <BgContainer
      title="Planos"
      bgImage="bg_3.jpg"
      :links="[
        { text: 'Início', to: '/' },
        { text: 'Planos', to: '/pricing' },
      ]"
    />

    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800">Nossos Planos</h2>
          <p class="text-gray-600 mt-2">
            Escolha o plano ideal para a sua empresa, seja mensal ou anual.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(plan, index) in plans"
            :key="index"
            class="bg-white rounded-lg shadow-lg p-6 text-center border hover:border-blue-500 transition"
          >
            <h3 class="text-xl font-semibold text-gray-800">{{ plan.name }}</h3>
            <p class="text-gray-500 mb-4">{{ plan.description }}</p>
            <p class="text-4xl font-bold text-blue-600 mb-4">
              {{ plan.price }}
              <span class="text-sm text-gray-500">/{{ plan.billingCycle }}</span>
            </p>
            <ul class="mb-6 space-y-2">
              <li
                v-for="(feature, i) in plan.features"
                :key="i"
                class="text-gray-600 flex items-center justify-center gap-2"
              >
                ✅ {{ feature }}
              </li>
            </ul>
            <button
              class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
            >
              Assinar
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BgContainer from "../components/composables/BgContainer.vue";

const plans = [
  {
    name: "Básico",
    description: "Ideal para pequenas empresas que precisam de poucos veículos.",
    price: "R$ 1.200",
    billingCycle: "mês",
    features: [
      "Até 2 veículos inclusos",
      "Manutenção preventiva inclusa",
      "Suporte 24/7",
    ],
  },
  {
    name: "Profissional",
    description: "Para empresas em crescimento com necessidades maiores.",
    price: "R$ 10.800",
    billingCycle: "ano",
    features: [
      "Até 5 veículos inclusos",
      "Troca de veículos sem custo",
      "Seguro total incluso",
      "Suporte prioritário",
    ],
  },
  {
    name: "Corporativo",
    description: "Plano completo para grandes empresas.",
    price: "R$ 18.000",
    billingCycle: "ano",
    features: [
      "Até 10 veículos inclusos",
      "Assistência personalizada",
      "Motorista incluso",
      "Seguro VIP incluso",
      "Troca de frota ilimitada",
    ],
  },
];
</script>

<style scoped>
</style>
