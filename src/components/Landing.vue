<template>
  <div>
    <div class="landing-page">
      <div class="left-section">
        <h1>New Laptop</h1>
        <p>we have a new collection</p>
        <button class="shop-button">Shop Now</button>
      </div>
      <div class="right-section">
        <img :src="imageSrc" alt="Laptop Image" />
      </div>
    </div>
    <div class="brand-section">
      <div class="brand-list">
        <router-link to="/brand1">
          <img :src="brand1Src" alt="Brand 1" class="brand-image" />
        </router-link>
        <router-link to="/brand2">
          <img :src="brand2Src" alt="Brand 2" class="brand-image" />
        </router-link>
        <router-link to="/brand3">
          <img :src="brand3Src" alt="Brand 3" class="brand-image" />
        </router-link>
        <router-link to="/brand4">
          <img :src="brand4Src" alt="Brand 4" class="brand-image" />
        </router-link>
        <router-link to="/brand5">
          <img :src="brand5Src" alt="Brand 5" class="brand-image" />
        </router-link>
        <router-link to="/brand6">
          <img :src="brand6Src" alt="Brand 6" class="brand-image" />
        </router-link>
        <router-link to="/brand7">
          <img :src="brand7Src" alt="Brand 7" class="brand-image" />
        </router-link>
      </div>
      <div class="brand-right"></div>
    </div>
  </div>
</template>

<script setup>
import imageSrc from '../IMG/IMG_1.jpg'
import brand1Src from '../IMG/Brand_1.jpg'
import brand2Src from '../IMG/Brand_2.jpg'
import brand3Src from '../IMG/Brand_3.jpg'
import brand4Src from '../IMG/Brand_4.jpg'
import brand5Src from '../IMG/Brand_5.jpg'
import brand6Src from '../IMG/Brand_6.jpg'
import brand7Src from '../IMG/Brand_7.jpg'
</script>

<style scoped>
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
  max-width: 100%;
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
}

.brand-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.brand-image {
  width: 200px;
  height: auto;
  cursor: pointer;
}
</style>
