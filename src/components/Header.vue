<template>
  <header class="header">
    <!-- Top bar -->
    <div class="top">
      <div class="logo">
        <router-link to="/" class="logo-link">
          <h1>
            <span class="tech">Tech</span>
            <span class="c3"> C3</span>
          </h1>
        </router-link>
      </div>

      <!-- Search -->
      <div class="search">
        <input type="text" placeholder="Search..." />
        <span class="search-icon">🔍</span>
      </div>

      <!-- Icons -->
      <div class="icons">
        <span>👤</span>
        <div class="cart-icon" @click="cartStore.toggleCartPopup">
          <span>🛒</span>
          <span v-if="cartItemCount > 0" class="cart-count">{{ cartItemCount }}</span>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <hr />

    <!-- Navigation -->
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/product" class="hidden">Product</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/contact">Contact Us</router-link>
      <router-link to="/about">About Us</router-link>
    </nav>
  </header>

      <!-- Cart Popup -->
  <CartPopup :is-visible="cartStore.isCartPopupVisible" @close="cartStore.toggleCartPopup" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart.js'
import CartPopup from './CartPopup.vue'

const cartStore = useCartStore()
const showCartPopup = ref(false)

const cartItemCount = computed(() => cartStore.totalItems)

const toggleCartPopup = () => {
  showCartPopup.value = !showCartPopup.value
}

const closeCartPopup = () => {
  showCartPopup.value = false
}
</script>

<style scoped>
.header {
  background-color: #f8f9fa;
}

/* ===== Top bar ===== */
.top {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 1rem 2rem;
  gap: 2rem;
}

/* Logo */
.logo h1 {
  margin: 0;
  font-size: 1.6rem;
}

.tech {
  color: #ff7a00;
  font-weight: bold;
}

.c3 {
  color: #7c3aed;
  font-weight: bold;
}

/* Search */
.search {
  display: flex;
  align-items: center;
  max-width: 420px;
  margin: 0 auto;
  width: 100%;
  position: relative;
}

.search input {
  width: 100%;
  padding: 0.5rem 2.2rem 0.5rem 0.7rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.search-icon {
  position: absolute;
  right: 8px;
  color: #777;
  pointer-events: none;
}

/* Icons */
.icons {
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
}

.notification-icon {
  position: relative;
  cursor: pointer;
}

.notification-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.7rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-icon {
  position: relative;
  cursor: pointer;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.7rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Divider */
hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 0;
}

/* ===== Navigation ===== */
.nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0.7rem 0;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav a.router-link-active {
  color: #00bfa6;
  font-weight: bold;
}

.logo-link {
  text-decoration: none;
}

.logo-link h1 {
  margin: 0;
}

.hidden {
  display: none;
}


</style>
