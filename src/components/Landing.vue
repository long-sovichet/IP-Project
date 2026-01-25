<template>
  <div class="landing-container">
    <div class="landing-page">
      <div class="left-section">
        <h1>New Laptop</h1>
        <p>we have a new collection</p>
        <button class="shop-button" @click="handleShopClick">Shop Now</button>
      </div>
      <div class="right-section">
        <img :src="imageSrc" alt="Laptop Image" />
      </div>
    </div>
    <div class="horizontal-line-full"></div>
    <div class="brand-section">
      <div class="brand-list">
        <img :src="brand1Src" alt="Brand 1" class="brand-image" @click="handleBrandClick('/brand1')" />
        <img :src="brand2Src" alt="Brand 2" class="brand-image" @click="handleBrandClick('/brand2')" />
        <img :src="brand3Src" alt="Brand 3" class="brand-image" @click="handleBrandClick('/brand3')" />
        <img :src="brand4Src" alt="Brand 4" class="brand-image" @click="handleBrandClick('/brand4')" />
        <img :src="brand5Src" alt="Brand 5" class="brand-image" @click="handleBrandClick('/brand5')" />
        <img :src="brand6Src" alt="Brand 6" class="brand-image" @click="handleBrandClick('/brand6')" />
        <img :src="brand7Src" alt="Brand 7" class="brand-image" @click="handleBrandClick('/brand7')" />
      </div>
      <div class="vertical-line"></div>
      <div class="brand-right">
        <div class="a1-container">
          <img :src="a1Src" alt="A1 Image" />
        </div>
        <div class="vertical-line-2"></div>
        <div class="small-images">
          <img :src="a2Src" alt="A2 Image" />
          <img :src="a3Src" alt="A3 Image" />
          <img :src="a4Src" alt="A4 Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import imageSrc from '../IMG/IMG_1.jpg'
import a1Src from '../IMG/A1.jpg'
import a2Src from '../IMG/A2.jpg'
import a3Src from '../IMG/A3.jpg'
import a4Src from '../IMG/A4.jpg'
import brand1Src from '../IMG/Brand_1.jpg'
import brand2Src from '../IMG/Brand_2.jpg'
import brand3Src from '../IMG/Brand_3.jpg'
import brand4Src from '../IMG/Brand_4.jpg'
import brand5Src from '../IMG/Brand_5.jpg'
import brand6Src from '../IMG/Brand_6.jpg'
import brand7Src from '../IMG/Brand_7.jpg'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const handleShopClick = () => {
  if (authStore.isAuthenticated) {
    // Navigate to a shopping page or show products
    router.push('/brand1') // Example: redirect to first brand
  } else {
    router.push('/login')
  }
}

const handleBrandClick = (brandPath) => {
  if (authStore.isAuthenticated) {
    router.push(brandPath)
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

.left-section h1 {
  font-size: 3em;
}

.left-section p {
  font-size: 1.5em;
}

.right-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 80%;
  height: auto;
}

.shop-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.brand-section {
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 150px;
  position: relative;
}

.brand-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 0 0 200px;
}

.brand-right {
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
}

.a1-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.a1-container img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1; /* Maintain square aspect ratio */
}

.horizontal-line-full {
  width: 100vw;
  height: 2px;
  background-color: gray;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
}

.small-images {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.small-images img {
  width: 50%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1; /* Maintain square aspect ratio */
}

.brand-image {
  max-width: 200px;
  width: 100%;
  height: auto;
  cursor: pointer;
  object-fit: contain;
}

.vertical-line {
  width: 2px;
  height: 100%;
  background-color: gray;
  position: absolute;
  top: 0;
  left: calc(200px + 75px - 20px);
}

.vertical-line-2 {
  width: 2px;
  height: 100%;
  background-color: gray;
  position: absolute;
  top: 0;
  left: calc(50vw + 295px);
}

/* Tablet styles */
@media (max-width: 768px) {
  .brand-section {
    gap: 50px;
  }

  .brand-list {
    flex: 0 0 150px;
  }

  .brand-image {
    max-width: 150px;
  }

  .vertical-line {
    left: calc(150px + 25px);
  }

  .vertical-line-2 {
    left: calc(50vw + 150px);
  }

  .small-images img {
    width: 60%;
  }
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

  .left-section p {
    font-size: 1.2em;
  }

  .brand-section {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .brand-list {
    flex: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .brand-image {
    max-width: 100px;
  }

  .brand-right {
    flex-direction: column;
    gap: 20px;
  }

  .a1-container img {
    max-width: 80%;
  }

  .small-images {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .small-images img {
    width: 40%;
    max-width: 100px;
  }

  .vertical-line,
  .vertical-line-2 {
    display: none;
  }
}
</style>
