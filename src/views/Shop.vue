<script setup>
import ProductSection from '@/components/ProductSection.vue'
import { brands } from '@/stores/product.js'
import { useRouter } from 'vue-router'

const router = useRouter()
function goToBrand(brandId) {
  router.push(`/shop/${brandId}`)
}
</script>

<template>
  <main class="shop-page">
    <div class="container">
      <ProductSection
        v-for="brand in brands"
        :key="brand.id"
        :brand-logo="brand.logo"
        :products="brand.products.slice(0, 4)"
        :brand-id="brand.id"
        @view-all="goToBrand"
      />
    </div>
  </main>
</template>

<style scoped>
.shop-page {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.container {
  width: 100%;
  max-width: 1300px;
  padding: 0 0px;
  box-sizing: border-box;
}
</style>
