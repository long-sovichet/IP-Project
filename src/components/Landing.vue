<template>
  <div class="landing-container">
    <div class="landing-page">
      <div class="left-section">
        <h1>New Laptop</h1>
        <p>we have a new collection</p>
        <button class="shop-button" @click="handleShopClick">Shop Now</button>
      </div>
      <div class="right-section">
        <img :src="productImages[currentImageIndex]" alt="Product Image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

// Import all main product images
import ac1 from '../../public/IMG/Acer_Product/AC1.jpg'
import ac2 from '../../public/IMG/Acer_Product/AC2.jpg'
import ac3 from '../../public/IMG/Acer_Product/AC3.jpg'
import ac4 from '../../public/IMG/Acer_Product/AC4.jpg'
import ac5 from '../../public/IMG/Acer_Product/AC5.jpg'
import ac6 from '../../public/IMG/Acer_Product/AC6.jpg'
import al1 from '../../public/IMG/Alien_Ware_Product/AL1.jpg'
import al2 from '../../public/IMG/Alien_Ware_Product/AL2.jpg'
import al3 from '../../public/IMG/Alien_Ware_Product/AL3.jpg'
import al4 from '../../public/IMG/Alien_Ware_Product/AL4.jpg'
import ap1 from '../../public/IMG/Apple_Product/AP1.jpg'
import ap2 from '../../public/IMG/Apple_Product/AP2.jpg'
import ap3 from '../../public/IMG/Apple_Product/AP3.jpg'
import ap4 from '../../public/IMG/Apple_Product/AP4.jpg'
import ap5 from '../../public/IMG/Apple_Product/AP5.jpg'
import as1 from '../../public/IMG/Asus_Product/AS1.jpg'
import as2 from '../../public/IMG/Asus_Product/AS2.jpg'
import as3 from '../../public/IMG/Asus_Product/AS3.jpg'
import as4 from '../../public/IMG/Asus_Product/AS4.jpg'
import as5 from '../../public/IMG/Asus_Product/AS5.jpg'
import as6 from '../../public/IMG/Asus_Product/AS6.jpg'
import d1 from '../../public/IMG/Dell_Product/D1.jpg'
import d2 from '../../public/IMG/Dell_Product/D2.jpg'
import d3 from '../../public/IMG/Dell_Product/D3.jpg'
import d4 from '../../public/IMG/Dell_Product/D4.jpg'
import d5 from '../../public/IMG/Dell_Product/D5.jpg'
import d6 from '../../public/IMG/Dell_Product/D6.jpg'
import ln1 from '../../public/IMG/Lenovo_Product/LN1.jpg'
import ln2 from '../../public/IMG/Lenovo_Product/LN2.jpg'
import ln3 from '../../public/IMG/Lenovo_Product/LN3.jpg'
import ln4 from '../../public/IMG/Lenovo_Product/LN4.jpg'
import ln5 from '../../public/IMG/Lenovo_Product/LN5.jpg'
import ln6 from '../../public/IMG/Lenovo_Product/LN6.jpg'
import m1 from '../../public/IMG/MSI_Product/M1.jpg'
import m2 from '../../public/IMG/MSI_Product/M2.jpg'
import m3 from '../../public/IMG/MSI_Product/M3.jpg'
import m4 from '../../public/IMG/MSI_Product/M4.jpg'
import m5 from '../../public/IMG/MSI_Product/M5.jpg'
import m6 from '../../public/IMG/MSI_Product/M6.jpg'

const authStore = useAuthStore()
const router = useRouter()

const productImages = [
  ac1, ac2, ac3, ac4, ac5, ac6,
  al1, al2, al3, al4,
  ap1, ap2, ap3, ap4, ap5,
  as1, as2, as3, as4, as5, as6,
  d1, d2, d3, d4, d5, d6,
  ln1, ln2, ln3, ln4, ln5, ln6,
  m1, m2, m3, m4, m5, m6
]

const currentImageIndex = ref(0)
let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % productImages.length
  }, 3000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

const handleShopClick = () => {
  if (authStore.isAuthenticated) {
    router.push('/shop')
  } else {
    router.push('/login')
  }
}
</script>

<style scoped>
.landing-container {
  position: relative;
}

.landing-page {
  display: flex;
  height: 80vh;
  align-items: center;
}

.left-section {
  flex: 1;
  padding: 20px;
  text-align: center;
}

.right-section {
  flex: 1;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-section img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.left-section h1 {
  font-size: 3em;
}

.left-section p {
  font-size: 1.5em;
}

.shop-button {
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.shop-button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.shop-button:active {
  transform: translateY(0);
}

/* Mobile styles */
@media (max-width: 480px) {
  .landing-page {
    flex-direction: column;
    height: auto;
  }

  .left-section h1 {
    font-size: 2em;
  }
}
</style>
