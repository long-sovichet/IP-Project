<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { brands } from '@/stores/product.js'
import { useCartStore } from '@/stores/cart.js'

const route = useRoute()
const router = useRouter()

const product = computed(() => {
  const productId = parseInt(route.params.id)
  for (const brand of brands) {
    const found = brand.products.find(p => p.id === productId)
    if (found) return found
  }
  return null
})

const currentImage = ref('')

const showCartMessage = ref(false)

const cartStore = useCartStore()

const addToCart = () => {
  cartStore.addItem(product.value)
  showCartMessage.value = true
}

const goBack = () => {
  router.push('/shop')
}

const proceedToCheckout = () => {
  showCartMessage.value = false
  cartStore.toggleCartPopup()
}

const setCurrentImage = (img) => {
  currentImage.value = img
}

// Initialize currentImage to the product's main image
if (product.value) {
  currentImage.value = product.value.image
}
</script>

<template>
  <div v-if="product" class="product-detail">
    <div class="product-container">
      <div class="left-side">
        <button class="back-button" @click="goBack">←</button>
        <img :src="currentImage || product.image" :alt="product.name" class="product-image" />
        <div class="angle-images">
          <img v-for="(angleImg, index) in product.angleImages" :key="index" :src="angleImg" :alt="product.name + ' angle ' + (index + 1)" class="angle-image" @click="setCurrentImage(angleImg)" />
        </div>
      </div>
      <div class="right-side">
        <h1 class="product-name">{{ product.name }}</h1>
        <p class="product-price">{{ product.price }}</p>
        <p class="product-description">{{ product.description }}</p>
        <div class="specs">
          <h2>Specifications</h2>
          <ul>
            <li><strong>Processor:</strong> {{ product.specs.processor }}</li>
            <li><strong>Memory:</strong> {{ product.specs.memory }}</li>
            <li><strong>Storage:</strong> {{ product.specs.storage }}</li>
            <li><strong>Display:</strong> {{ product.specs.display }}</li>
            <li><strong>Weight:</strong> {{ product.specs.weight }}</li>
          </ul>
        </div>
        <div class="buttons">
          <button class="add-to-cart" @click="addToCart"><span class="cart-icon">🛒</span> Add to Cart</button>
          <button class="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="not-found">
    <p>Product not found.</p>
  </div>

  <!-- Cart Success Modal -->
  <div v-if="showCartMessage" class="modal-overlay" @click="showCartMessage = false">
    <div class="modal-content" @click.stop>
      <div class="success-icon">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="white" stroke="#10b981" stroke-width="2"/>
          <path d="M8 12l2 2 4-4" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h2 class="success-title">Item added to your cart!</h2>
      <p>{{ product.name }} has been successfully added to your cart.</p>
      <div class="modal-buttons">
        <button class="modal-back-button" @click="goBack">Back to Shop</button>
        <button class="checkout-button" @click="proceedToCheckout">Proceed to Checkout</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-detail {
  display: flex;
  justify-content: center;
  padding: 20px;
  min-height: 80vh;
}

.product-container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  overflow: hidden;
}

.left-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  padding: 20px;
}

.product-image {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 8px;
}

.angle-images {
  display: flex;
  gap: 10px;
  margin-top: 200px;
  align-self: flex-start;
}

.angle-image {
  max-width: 100px;
  max-height: 100px;
  object-fit: contain;
  border-radius: 4px;
  cursor: pointer;
}

.right-side {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-name {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #1f2937;
}

.product-price {
  font-size: 1.5rem;
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 20px;
}

.product-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 30px;
}

.specs h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #1f2937;
}

.specs ul {
  list-style: none;
  padding: 0;
}

.specs li {
  margin-bottom: 10px;
  font-size: 1rem;
  color: #374151;
}

.buttons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.add-to-cart {
  background: #10b981;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.2s;
}

.add-to-cart:hover {
  background: #059669;
}

.cart-icon {
  filter: brightness(0) invert(1);
}

.buy-now {
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.2s;
}

.buy-now:hover {
  background: #1d4ed8;
}

.not-found {
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
  color: #6b7280;
}

@media (max-width: 768px) {
  .product-container {
    flex-direction: column;
  }

  .left-side, .right-side {
    flex: none;
  }

  .right-side {
    padding: 20px;
  }

  .product-name {
    font-size: 1.5rem;
  }

  .product-price {
    font-size: 1.2rem;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}

.modal-content h2 {
  margin-bottom: 15px;
  color: #1f2937;
}

.modal-content p {
  margin-bottom: 25px;
  color: #4b5563;
}

.modal-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.back-button {
  background: white;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 2rem;
  transition: background 0.2s;
  margin-bottom: 200px;
  margin-left: -400px;
}

.back-button:hover {
  background: #4b5563;
}

.checkout-button {
  background: #2563eb;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}

.checkout-button:hover {
  background: #1d4ed8;
}

.modal-back-button {
  background: #6b7280;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}

.modal-back-button:hover {
  background: #4b5563;
}

.success-icon {
  font-size: 3rem;
  margin-bottom: 10px;
}

.success-title {
  color: #10b981 !important;
  margin-bottom: 15px;
}
</style>
