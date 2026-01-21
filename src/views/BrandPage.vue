<script setup>
import { useRoute } from 'vue-router'
import { brands } from '@/stores/product.js'
import ProductSection from '@/components/ProductSection.vue'

const route = useRoute()
const brandId = Number(route.params.id)
const brand = brands.find(b => b.id === brandId)
</script>

<template>
  <main class="brand-page">
    <div class="container">
      <ProductSection
        :brand-logo="brand.logo"
        :products="brand.products"
        :hide-view-all="true"
      />
    </div>
  </main>
</template>

<style scoped>
.brand-page {
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

.brand-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
}

.brand-logo {
  height: 36px;
  object-fit: contain;
  border-radius: 12px;
}

.product-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  max-width: calc(220px * 4 + 20px * 3);
}

.product-card {
  text-align: center;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}

.product-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.product-link img {
  width: 100%;
  max-height: 160px;
  object-fit: contain;
  border-radius: 12px 12px 0 0;
  transition: transform 0.2s;
}

.product-link:hover img {
  transform: scale(1.05);
}

.product-name {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
}

</style>
