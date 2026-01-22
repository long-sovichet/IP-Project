<script setup>
defineProps({
  brandLogo: String,
  products: Array,
  brandId: [String, Number],
  hideViewAll: { type: Boolean, default: false }
})
</script>

<template>
  <section class="product-section">
    <div :class="['brand-bar', hideViewAll ? 'center' : '']">
    <img :src="brandLogo" alt="brand logo" class="brand-logo" />
    <button
      v-if="!hideViewAll"
      class="view-all"
      @click="$emit('view-all', brandId)"
    >
      View All
    </button>
    </div>

    <div class="product-grid">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <router-link :to="`/product/${product.id}`" class="product-link">
          <img :src="product.image" alt="product" />
          <p class="product-name">{{ product.name }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-section {
  margin-bottom: 40px;
}

.brand-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: transparent;
}

.brand-bar.center {
  justify-content: center;
}

.brand-logo {
  height: 36px;
  max-width: 180px;
  object-fit: contain;
  border-radius: 12px;
}

.view-all {
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 6px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s ease;
}

.view-all:hover {
  background: #1e40af;
}

.product-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
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
